const dbconn = require('../database/dbconn');


module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await dbconn('atividades').count();

    const atividades = await dbconn('atividades')
      .join('ongs', 'ongs.id', '=', 'atividades.ong_id')
      .limit(10)
      .offset((page - 1) * 10)
      .select([
        'atividades.*',
        'ongs.nome',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.cidade',
        'ongs.uf'
      ]);

    response.header('Total-Count', count['count(*)']);

    return response.json(atividades);
  },

  async create(request, response) {
    const { titulo, descricao, valor } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await dbconn('atividades').insert({
      titulo,
      descricao,
      valor,
      ong_id,
    })

    return response.json({ id })

  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const atividade = await dbconn('atividades')
      .where('id', id)
      .select('ong_id')
      .first();

    if (atividade.ong_id !== ong_id) {
      return response.status(401).json({ erro: `Não autorizado, esta atividade não foi criada pela ONG ${ong_id}` });
    }

    await dbconn('atividades').where('id', id).delete();

    return response.status(204).send();
  }

};
