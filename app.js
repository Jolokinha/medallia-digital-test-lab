const tickets = [
  { id: "TK-1001", subject: "Não consigo acessar minha conta", customer: "João Silva", email: "joao.silva@example.com", date: "06 nov, 09:42", status: "Aberto", statusKey: "open", priority: "Alta", priorityKey: "high", category: "Acesso e autenticação", channel: "Website", description: "Desde ontem não consigo fazer login na minha conta. Já tentei redefinir minha senha, mas continuo recebendo uma mensagem de erro depois de inserir meus dados. Preciso de ajuda para recuperar o acesso." },
  { id: "TK-1002", subject: "Cobrança duplicada no cartão", customer: "Mariana Costa", email: "mariana.costa@example.com", date: "06 nov, 08:15", status: "Em andamento", statusKey: "progress", priority: "Alta", priorityKey: "high", category: "Pagamento", channel: "Mobile", description: "Identifiquei duas cobranças com o mesmo valor na fatura do meu cartão. Gostaria de confirmar se houve duplicidade e como posso solicitar o estorno." },
  { id: "TK-1003", subject: "Aplicativo fecha ao abrir", customer: "Pedro Almeida", email: "pedro.almeida@example.com", date: "05 nov, 17:30", status: "Resolvido", statusKey: "resolved", priority: "Média", priorityKey: "medium", category: "Aplicativo", channel: "Mobile", description: "O aplicativo fecha sozinho alguns segundos depois de ser aberto. O problema começou após a última atualização. No momento, o ticket está marcado como resolvido para fins de demonstração." },
  { id: "TK-1004", subject: "Dúvida sobre prazo de entrega", customer: "Ana Oliveira", email: "ana.oliveira@example.com", date: "05 nov, 14:08", status: "Aberto", statusKey: "open", priority: "Baixa", priorityKey: "low", category: "Entrega", channel: "Website", description: "Gostaria de saber onde posso acompanhar o prazo estimado de entrega do meu pedido. Não encontrei essa informação na área do cliente." },
  { id: "TK-1005", subject: "Erro ao atualizar cadastro", customer: "Lucas Ferreira", email: "lucas.ferreira@example.com", date: "04 nov, 11:20", status: "Em andamento", statusKey: "progress", priority: "Média", priorityKey: "medium", category: "Cadastro", channel: "Website", description: "Ao tentar atualizar meu telefone, aparece uma mensagem informando que não foi possível salvar as alterações. Já tentei em dois navegadores diferentes." },
  { id: "TK-1006", subject: "Solicitação de cancelamento", customer: "Camila Santos", email: "camila.santos@example.com", date: "03 nov, 16:55", status: "Resolvido", statusKey: "resolved", priority: "Baixa", priorityKey: "low", category: "Conta", channel: "Email", description: "Entrei em contato para solicitar o cancelamento do serviço. A solicitação foi processada e o ticket está concluído." }
];

const list = document.querySelector("#ticket-list");
const detail = document.querySelector("#detail-content");
const search = document.querySelector("#ticket-search");
const count = document.querySelector("#ticket-count");
let selectedId = tickets[0].id;

function renderList() {
  const term = search.value.trim().toLocaleLowerCase("pt-BR");
  const filtered = tickets.filter(t => [t.id, t.subject, t.customer, t.status].some(v => v.toLocaleLowerCase("pt-BR").includes(term)));
  count.textContent = String(filtered.length).padStart(2, "0");
  list.innerHTML = filtered.length ? filtered.map(t => `
    <button class="ticket-card ${t.id === selectedId ? "active" : ""}" data-id="${t.id}" type="button">
      <div class="ticket-card-top"><span class="ticket-id">${t.id}</span><span class="ticket-date">${t.date}</span></div>
      <div class="ticket-subject">${t.subject}</div>
      <div class="ticket-card-bottom"><span class="ticket-customer">${t.customer}</span><span class="status ${t.statusKey}">${t.status}</span></div>
    </button>`).join("") : '<div class="empty-search">Nenhum ticket encontrado.</div>';
  list.querySelectorAll("[data-id]").forEach(button => button.addEventListener("click", () => {
    selectedId = button.dataset.id;
    renderList();
    renderDetail();
  }));
}

function renderDetail() {
  const t = tickets.find(item => item.id === selectedId);
  if (!t) {
    detail.innerHTML = '<div class="detail-empty"><div><strong>Nenhum ticket selecionado</strong>Escolha um ticket na lista para visualizar os detalhes.</div></div>';
    return;
  }
  const initials = t.customer.split(" ").map(part => part[0]).slice(0, 2).join("").toUpperCase();
  detail.innerHTML = `
    <div class="detail-header">
      <div><div class="detail-id">${t.id}</div><h2 class="detail-title">${t.subject}</h2><div class="detail-subtitle">Criado em ${t.date}</div></div>
      <span class="status ${t.statusKey}">${t.status}</span>
    </div>
    <section class="detail-section"><h3 class="section-title">Descrição do ticket</h3><p class="description">${t.description}</p></section>
    <section class="detail-section"><h3 class="section-title">Informações</h3>
      <div class="info-grid">
        <div class="info-box"><span>Prioridade</span><strong class="priority-${t.priorityKey}">${t.priority}</strong></div>
        <div class="info-box"><span>Categoria</span><strong>${t.category}</strong></div>
        <div class="info-box"><span>Canal de origem</span><strong>${t.channel}</strong></div>
      </div>
    </section>
    <section class="detail-section"><h3 class="section-title">Dados do cliente</h3>
      <div class="customer-panel"><div class="avatar">${initials}</div><div><strong>${t.customer}</strong><span>${t.email}</span></div></div>
    </section>
    <section class="detail-section"><h3 class="section-title">Área de testes</h3><div id="satisfaction_emb_form""></div></section>
  `;
}

search.addEventListener("input", renderList);
document.querySelector("#clear-search").addEventListener("click", () => { search.value = ""; renderList(); });
renderList();
renderDetail();
