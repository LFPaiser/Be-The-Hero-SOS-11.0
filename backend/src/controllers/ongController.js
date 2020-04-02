const dbconn = require('../database/dbconn');
const crypto = require('crypto');



module.exports = {
  async index(request, response) {
    const ongs = await dbconn('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response) {
    const { nome, email, whatsapp, cidade, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await dbconn('ongs').insert({
      id,
      nome,
      email,
      whatsapp,
      cidade,
      uf,
    })


    return response.json({ id });
  }
}
