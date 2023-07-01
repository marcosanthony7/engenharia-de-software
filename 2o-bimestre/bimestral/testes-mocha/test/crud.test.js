const assert = require('assert');

const {
    CRUD
  } = require('../src/crud'); // Importe as funções do programa CRUD

describe("CRUD", function() {
  describe("createItem()", function() {
    it("Adicionar um item na lista", function() {
      let c = new CRUD();
      c.createItem("Teste");
      assert.strictEqual(c.items.length, 1);
    });

    it("Adicionar 3 itens na lista", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.strictEqual(c.items.length, 3);
    });
  });

  // teste ler todos itens
  describe("readItems()", function() {
    it("Deve retornar a lista de itens corretamente", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const items = c.readItems();
      assert.deepStrictEqual(items, ["Item 1", "Item 2", "Item 3"]);
    });
  });

  // teste ler item especifico
  describe("readItem()", function() {
    it("Deve retornar o item correto pelo índice", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const item = c.readItem(1);
      assert.strictEqual(item, "Item 2");
    });
  });

  // teste update
  describe("updateItem()", function() {
    it("Deve atualizar um item pelo índice corretamente", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const isUpdated = c.updateItem(1, "Item Atualizado");
      assert.strictEqual(isUpdated, true);
      const updatedItems = c.readItem(1);
      assert.strictEqual(updatedItems, "Item Atualizado");
    });
  });

  // teste delete
  describe("deleteItem()", function() {
    it("Deve excluir um item pelo índice corretamente", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const isDeleted = c.deleteItem(2);
      assert.strictEqual(isDeleted, true);
      const remainingItems = c.readItems();
      assert.deepStrictEqual(remainingItems, ["Item 1", "Item 2"]);
    });
  });
});