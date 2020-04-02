const dbconn = require('../database/dbconn');


module.exports = {
  async index(request, response) {
    const { id } = request.body;

    const ong = await dbconn('ongs')
      .where('id', id)
      .select('nome')
      .first();

    if (!ong) {
      return response.status(400).json({ error: 'Nenhuma ONG encontrada com esse ID' });
    }

    return response.json(ong);
  }
}
