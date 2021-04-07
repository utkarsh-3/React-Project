using ClientsApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace ClientsApi.Services
{
    public class ClientService:IClientRepository<Client>
    {
        private readonly IMongoCollection<Client> _clients;

        public ClientService(IClientDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _clients = database.GetCollection<Client>(settings.ClientCollectionName);
        }

        public List<Client> Get() =>
            _clients.Find(tmp => true).ToList();
        public Client Validate(string firstName, string lastName, string email) =>
           _clients.Find<Client>(client => (client.FirstName == firstName & client.LastName == lastName) & client.Email == email).FirstOrDefault();


        public Client Add(Client client)
        {
            _clients.InsertOne(client);
            return client;
        }

        public void Update(string id, Client clientIn) =>
            _clients.ReplaceOne(client => client.ClientId == id, clientIn);

       

        public void Delete(string id) =>
            _clients.DeleteOne(client => client.ClientId == id);

        
        
        public Client Get(string id)=>
             _clients.Find<Client>(client => client.ClientId == id).FirstOrDefault();
        

       
    }
}