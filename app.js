const scenarios = {
  ok: {
    physical: 72,
    financial: 68,
    title: "Proyecto en orden",
    text: "Los porcentajes son similares. El gasto coincide con lo construido.",
    alert: "Los porcentajes son similares. No hay alerta automática.",
    className: "is-ok",
  },
  risk: {
    physical: 30,
    financial: 90,
    title: "Posible riesgo de corrupción",
    text: "Obra 30% construida pero 90% pagada. El gasto avanza sin evidencia física suficiente.",
    alert: "Alerta: el avance financiero supera por mucho al avance físico.",
    className: "is-risk",
  },
  delay: {
    physical: 44,
    financial: 76,
    title: "Obra detenida con pagos avanzando",
    text: "El avance físico se mantiene bajo mientras el pago acumulado sigue creciendo.",
    alert: "Foco rojo: se requieren fotos recientes, explicación pública y documentos de respaldo.",
    className: "is-danger",
  },
};

const physicalBar = document.querySelector("#physicalBar");
const financialBar = document.querySelector("#financialBar");
const physicalValue = document.querySelector("#physicalValue");
const financialValue = document.querySelector("#financialValue");
const statusCard = document.querySelector("#statusCard");
const statusTitle = document.querySelector("#statusTitle");
const statusText = document.querySelector("#statusText");
const scenarioSelect = document.querySelector("#scenarioSelect");
const miniPhysical = document.querySelector("#miniPhysical");
const miniFinancial = document.querySelector("#miniFinancial");
const alertCopy = document.querySelector("#alertCopy");
const reportDialog = document.querySelector("#reportDialog");

function setScenario(key) {
  const scenario = scenarios[key];
  const physical = `${scenario.physical}%`;
  const financial = `${scenario.financial}%`;

  physicalBar.style.width = physical;
  financialBar.style.width = financial;
  physicalValue.textContent = physical;
  financialValue.textContent = financial;
  miniPhysical.textContent = physical;
  miniFinancial.textContent = financial;
  statusTitle.textContent = scenario.title;
  statusText.textContent = scenario.text;
  alertCopy.textContent = scenario.alert;
  statusCard.className = `status-card ${scenario.className}`;
}

function openReportDialog() {
  if (typeof reportDialog.showModal === "function") {
    reportDialog.showModal();
  }
}

scenarioSelect.addEventListener("change", (event) => {
  setScenario(event.target.value);
});

document.querySelector("#openReport").addEventListener("click", openReportDialog);
document.querySelector("#openReportBottom").addEventListener("click", openReportDialog);

setScenario("ok");
