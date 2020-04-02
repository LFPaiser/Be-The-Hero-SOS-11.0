const dbconn = require('../database/dbconn');

module.exports = {
  async index(request, response) {
    const ongId = request.headers.authorization;

    const atividades = await dbconn('atividades')
    .select('*')
    .where('ong_id', ongId);

    return response.json(atividades);
  }
}
