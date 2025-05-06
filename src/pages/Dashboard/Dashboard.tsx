const mockUsers = [
  { id: 1, name: "João Silva", email: "joao@email.com", role: "Admin" },
  { id: 2, name: "Maria Oliveira", email: "maria@email.com", role: "Usuária" },
  { id: 3, name: "Carlos Santos", email: "carlos@email.com", role: "Usuário" },
  { id: 4, name: "Ana Souza", email: "ana@email.com", role: "Moderadora" },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Painel de Usuários</h1>
        <div className="bg-white rounded-2xl shadow p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600 uppercase text-sm border-b">
                <th className="py-2">Nome</th>
                <th className="py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={`border-b hover:bg-gray-50 bg-${
                    index % 2 === 0 ? "white" : "tertiary"
                  }`}
                >
                  <td className="py-3">{user.name}</td>
                  <td className="py-3">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
