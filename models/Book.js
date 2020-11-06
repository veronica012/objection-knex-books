const { Model } = require('objection');

class Book extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'books';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['title', 'author'],
      properties: {
        id: { type: 'integer'},
        title: { type: 'string' },
        author: { type: 'string' }
            }       
        }   
     }
};