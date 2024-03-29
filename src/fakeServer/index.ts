import { createServer, Model } from "miragejs";

export function startFakeServer() {
  createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        // Presta atenção... transactions aqui tem s no final enquanto o nome do módulo não tem
        transactions: [
          {
            id: 1,
            title: "Freela de Desenvolvimento",
            type: "deposit",
            category: "Dev",
            amount: 6000,
            createdAt: new Date("2021-02-12 09:00:00"),
          },
          {
            id: 2,
            title: "Aluguel",
            type: "withdraw",
            category: "Casa",
            amount: 500,
            createdAt: new Date("2021-02-14 11:00:00"),
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/transactions", () => {
        return this.schema.all("transaction");
      });

      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("transaction", { ...data, createdAt: new Date() });
      });

      this.delete("/transactions/:id", (schema, request) => {
        const transactionId = request.params.id;
        const transactionFound = schema.find("transaction", transactionId);
        transactionFound?.destroy();
        return transactionFound as any;
      });
    },
  });
}
