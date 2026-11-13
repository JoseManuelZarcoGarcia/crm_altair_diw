/**
 * 
 */

const photos = {
  event:
    "https://images.unsplash.com/photo-1574556462559-1fceb1f3ae3f?auto=format&fit=crop&w=1600&q=85",
  teachers: [
    "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1758873268113-326c61b29968?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&w=500&q=80",
  ],
}

const altairLogo =
  "data:image/png;base64,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"

const iconPaths = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10M9.5 20v-6h5v6"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  file: '<path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 13h6M9 17h6"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  arrow: '<path d="m15 18 6-6-6-6M21 12H3"/>',
  back: '<path d="m9 18-6-6 6-6M3 12h18"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  upload: '<path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 21h14"/>',
  edit: '<path d="m4 20 4-1 11-11-3-3L5 16zM14 6l3 3"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6"/>',
}

const icon = (name, size = 20) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || ""}</svg>`

const state = {
  view: "inicio",
  profileOpen: false,
  homeDay: 14,
  calendarMonth: 4,
  tutorFilter: "Todos",
  teacher: 1,
  tutorTime: "12:30",
  tutorReason: "",
  tutorDuration: "30 minutos",
  tutorSent: false,
  absenceDay: 0,
  absenceSlots: [0],
  justificationSent: false,
  cvNotice: "",
  cvWorkOpen: false,
  cvEduOpen: false,
  cvLanguageOpen: false,
  editingLanguage: null,
  workVisible: true,
  eduVisible: true,
  personal: {
    name: "Javier Martínez López",
    email: "j.martinez@colegioaltair.net",
    phone: "612 345 678",
    city: "Sevilla",
  },
  languages: [
    {
      id: 1,
      language: "Inglés",
      certificate: "Cambridge English B2 First",
      file: "cambridge-b2.pdf",
    },
  ],
}

const titles = {
  inicio: "Inicio",
  tutorias: "Tutorías",
  horario: "Mi horario",
  faltas: "Asistencia",
  justificar: "Justificar faltas",
  cv: "Mi currículum",
}

const teachers = [
  {
    name: "Carlos Moreno",
    subject: "Programación",
    course: "2º DAM",
    photo: photos.teachers[0],
  },
  {
    name: "Marta Ruiz",
    subject: "Interfaces",
    course: "2º DAM",
    photo: photos.teachers[1],
  },
  {
    name: "Álvaro Pérez",
    subject: "Base de datos",
    course: "1º DAM",
    photo: photos.teachers[2],
  },
  {
    name: "Lucía García",
    subject: "Inglés técnico",
    course: "2º DAM",
    photo: photos.teachers[3],
  },
  {
    name: "Elena Vidal",
    subject: "Empresa",
    course: "1º DAM",
    photo: photos.teachers[4],
  },
]

const agenda = {
  7: [
    {
      type: "Entrega",
      title: "Diseño de interfaz móvil",
      detail: "Hasta las 23:59 · Desarrollo de interfaces",
    },
  ],
  14: [
    {
      type: "Examen",
      title: "Desarrollo de interfaces",
      detail: "09:00 · Aula 2.4",
    },
    {
      type: "Entrega",
      title: "Proyecto API REST",
      detail: "Hasta las 23:59 · Entorno servidor",
    },
  ],
  22: [{ type: "Examen", title: "Acceso a datos", detail: "11:30 · Aula 2.2" }],
  27: [
    {
      type: "Entrega",
      title: "Memoria del proyecto final",
      detail: "Hasta las 18:00 · Aula virtual",
    },
    { type: "Examen", title: "Inglés técnico", detail: "12:30 · Aula 1.6" },
  ],
}

const schedule = [
  [
    "8:15 - 9:15",
    "Acceso a datos",
    "Programación de servicios",
    "Acceso a datos",
    "Sistemas de gestión",
    "Programación multimedia",
  ],
  [
    "9:15 - 10:15",
    "Acceso a datos",
    "Programación de servicios",
    "Acceso a datos",
    "Sistemas de gestión",
    "Programación multimedia",
  ],
  [
    "10:45 - 11:45",
    "Inglés técnico",
    "Desarrollo de interfaces",
    "Empresa",
    "Desarrollo de interfaces",
    "Empresa",
  ],
  [
    "11:45 - 12:45",
    "Programación multimedia",
    "Desarrollo de interfaces",
    "Sistemas de gestión",
    "Desarrollo de interfaces",
    "Sistemas de gestión",
  ],
  [
    "12:45 - 13:45",
    "Programación multimedia",
    "Empresa",
    "Sistemas de gestión",
    "Acceso a datos",
    "Inglés técnico",
  ],
  [
    "13:45 - 14:45",
    "Sistemas de gestión",
    "Empresa",
    "Programación de servicios",
    "Acceso a datos",
    "Inglés técnico",
  ],
]

const attendance = [
  ["Desarrollo de interfaces", 5, "8,3%", "Medio"],
  ["Acceso a datos", 2, "3,1%", "Bajo"],
  ["Programación multimedia", 8, "12,5%", "Alto"],
  ["Sistemas de gestión", 3, "4,7%", "Bajo"],
  ["Empresa e iniciativa", 1, "1,6%", "Bajo"],
  ["Inglés técnico", 4, "6,3%", "Medio"],
]

const absenceDays = [
  {
    date: "Martes, 6 de mayo",
    count: 2,
    slots: ["08:00 · Acceso a datos", "09:00 · Acceso a datos"],
  },
  {
    date: "Jueves, 24 de abril",
    count: 3,
    slots: [
      "10:00 · Desarrollo de interfaces",
      "11:30 · Desarrollo de interfaces",
      "12:30 · Acceso a datos",
    ],
  },
  {
    date: "Lunes, 7 de abril",
    count: 6,
    slots: [
      "08:00 · Acceso a datos",
      "09:00 · Acceso a datos",
      "10:00 · Inglés técnico",
      "11:30 · Programación multimedia",
      "12:30 · Programación multimedia",
      "13:30 · Sistemas de gestión",
    ],
  },
]

function pageTitle(eyebrow, title, text, back = false) {
  return `<div class="page-title">
    ${
      back
        ? `<button class="back-button" data-go="faltas">${icon("back")} Volver</button>`
        : ""
    }
    <span>${eyebrow}</span><h1>${title}</h1><p>${text}</p>
  </div>`
}

function calendar(selectedDay, selectable = true) {
  const year = 2025
  const month = state.calendarMonth
  const names = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]
  const first = (new Date(year, month, 1).getDay() + 6) % 7
  const count = new Date(year, month + 1, 0).getDate()
  const cells = Array(first)
    .fill(null)
    .concat(Array.from({ length: count }, (_, index) => index + 1))
  return `<div class="calendar">
    <div class="calendar-head">
      <button data-calendar-move="-1" aria-label="Mes anterior">${icon("chevron")}</button>
      <h3>${names[month]} ${year}</h3>
      <button data-calendar-move="1" aria-label="Mes siguiente">${icon("chevron")}</button>
    </div>
    <div class="calendar-grid weekday">${["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day) => `<b>${day}</b>`).join("")}</div>
    <div class="calendar-grid">${cells
      .map((day) =>
        day
          ? `<button ${selectable ? `data-calendar-day="${day}"` : ""} class="${
              selectedDay === day ? "selected-day" : ""
            } ${
              [7, 14, 22, 27].includes(day) ? "event-day" : ""
            }">${day}</button>`
          : "<span></span>",
      )
      .join("")}</div>
  </div>`
}

function homeView() {
  const events = agenda[state.homeDay] || []
  const dateLabel = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(2025, 4, state.homeDay))
  const quick = [
    [
      "Tutorías",
      "Reserva una cita con tu profesor",
      "users",
      "cyan",
      "tutorias",
    ],
    ["Mi horario", "Consulta tus clases de hoy", "calendar", "blue", "horario"],
    [
      "Asistencia",
      "Revisa y justifica tus faltas",
      "chart",
      "orange",
      "faltas",
    ],
  ]
  return `<section class="welcome">
      <div><span>MIÉRCOLES, 14 DE MAYO</span><h1>Buenos días, Javier</h1><p>Todo listo para continuar aprendiendo. Tienes 2 eventos próximos esta semana.</p></div>
      <div class="course-pill"><b>2º DAM</b><small>Curso 2024–2025</small></div>
    </section>
    <section class="quick-grid">${quick.map(([title, text, ico, color, view]) => `<button class="quick-card" data-go="${view}"><span class="quick-icon ${color}">${icon(ico, 23)}</span><span><b>${title}</b><small>${text}</small></span>${icon("chevron", 18)}</button>`).join("")}</section>
    <section class="dashboard-grid">
      <div class="card calendar-card">
        <div class="card-title"><div><span>AGENDA ACADÉMICA</span><h2>Tu calendario</h2></div><button>Ver agenda completa ${icon("arrow", 17)}</button></div>
        ${calendar(state.homeDay)}
        <div class="legend"><span><i class="dot exam"></i>Examen</span><span><i class="dot task"></i>Entrega</span><span><i class="dot event"></i>Evento</span></div>
      </div>
      <div class="side-column"><div class="card upcoming">
        <div class="card-title"><div><span>AGENDA DEL DÍA</span><h2>El día seleccionado</h2><p>${dateLabel}</p></div></div>
        ${
          events.length
            ? events
                .map(
                  (event) =>
                    `<article><time><b>${state.homeDay}</b>MAY</time><div><em class="tag ${
                      event.type === "Examen" ? "red" : "blue"
                    }">${event.type}</em><b>${event.title}</b><small>${event.detail}</small></div></article>`,
                )
                .join("")
            : `<div class="empty-agenda"><span>${icon("check")}</span><b>Todo despejado</b><p>No tienes exámenes ni entregas para este día.</p></div>`
        }
      </div></div>
    </section>
    <section class="event-banner">
      <img src="${photos.event}" alt="Alumnos trabajando con tecnología" /><div class="event-overlay"></div>
      <div class="event-content"><span>VIDA EN ALTAIR</span><h2>Semana de la tecnología y la empresa</h2><p>Charlas, talleres y encuentros con profesionales del sector. Del 20 al 24 de mayo.</p><button>Descubrir el programa ${icon("arrow")}</button></div>
      <div class="banner-dots"><i></i><i class="active"></i><i></i></div>
    </section>`
}

function tutoringView() {
  const visible =
    state.tutorFilter === "Todos"
      ? teachers
      : teachers.filter((teacher) => teacher.course === state.tutorFilter)
  const selectedTeacher = teachers[state.teacher]
  return `${pageTitle("GESTIÓN ACADÉMICA", "Reserva una tutoría", "Elige un profesor y encuentra el momento que mejor te venga.")}
    ${
      state.tutorSent
        ? `<div class="success-message">${icon("check")} Tutoría solicitada correctamente para el miércoles 14 a las ${state.tutorTime}.</div>`
        : ""
    }
    <div class="filter-row"><span>Filtrar por curso</span>${["Todos", "1º DAM", "2º DAM"].map((filter) => `<button data-tutor-filter="${filter}" class="${state.tutorFilter === filter ? "active" : ""}">${filter}</button>`).join("")}</div>
    <div class="teacher-scroll">${visible
      .map((teacher) => {
        const index = teachers.indexOf(teacher)
        return `<button class="teacher-card ${
          state.teacher === index ? "active" : ""
        }" data-teacher="${index}"><img src="${teacher.photo}" alt="${teacher.name}" /><span><b>${teacher.name}</b><small>${teacher.subject} · ${teacher.course}</small></span>${
          state.teacher === index ? `<i>${icon("check", 14)}</i>` : ""
        }</button>`
      })
      .join("")}</div>
    <div class="booking-grid">
      <div class="card booking-calendar"><div class="card-title"><div><span>SELECCIONA UNA FECHA</span><h2>Mayo 2025</h2></div></div>${calendar(14)}</div>
      <div class="card time-card">
        <div class="selected-teacher"><img src="${selectedTeacher.photo}" alt="" /><div><small>Tutoría con</small><b>${selectedTeacher.name}</b><span>${selectedTeacher.subject}</span></div></div>
        <h3>Horas disponibles · Miércoles 14</h3>
        <div class="time-grid">${["09:30", "10:00", "11:30", "12:30", "16:00", "17:30"].map((time) => `<button data-tutor-time="${time}" class="${state.tutorTime === time ? "active" : ""}">${time}<small>30 min libres</small></button>`).join("")}</div>
        <label class="field-label">Motivo de la tutoría<textarea id="tutor-reason" placeholder="Explica brevemente el motivo de tu consulta...">${state.tutorReason}</textarea></label>
        <label class="field-label">Duración<select id="tutor-duration"><option>30 minutos</option><option ${
          state.tutorDuration === "1 hora" ? "selected" : ""
        }>1 hora</option></select></label>
        <div class="form-actions"><button class="button secondary" id="cancel-tutor">Cancelar</button><button class="button primary" id="send-tutor" ${
          state.tutorTime ? "" : "disabled"
        }>Solicitar tutoría</button></div>
      </div>
    </div>`
}

function scheduleView() {
  return `${pageTitle("ORGANIZACIÓN ACADÉMICA", "Mi horario", "Consulta tus clases semanales y la ubicación de cada asignatura.")}
    <div class="card schedule-card"><div class="schedule-heading"><div><span class="live-dot"></span>Horario semanal · 2º DAM</div></div>
      <div class="schedule-table"><div class="schedule-row header"><span>Hora</span>${["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((day) => `<b>${day}</b>`).join("")}</div>
      ${schedule
        .map(
          (row, rowIndex) =>
            `<div class="schedule-row"><time>${row[0]}</time>${row
              .slice(1)
              .map(
                (subject, columnIndex) =>
                  `<div class="class-block tone-${(rowIndex + columnIndex) % 4}"><b>${subject}</b><small>Aula ${2 + columnIndex}.${rowIndex + 1}</small></div>`,
              )
              .join("")}</div>`,
        )
        .join("")}</div>
    </div>`
}

function attendanceView() {
  return `${pageTitle("SEGUIMIENTO DEL CURSO", "Asistencia", "Consulta tus faltas por asignatura y mantén tus justificantes al día.")}
    <div class="stats-row">
      <div class="stat-card"><span class="stat-icon blue">${icon("calendar")}</span><div><small>Clases impartidas</small><b>312</b><em>Este curso</em></div></div>
      <div class="stat-card"><span class="stat-icon orange">${icon("clock")}</span><div><small>Faltas totales</small><b>23</b><em>7,4% del total</em></div></div>
      <div class="stat-card"><span class="stat-icon green">${icon("check")}</span><div><small>Justificadas</small><b>14</b><em>61% de tus faltas</em></div></div>
    </div>
    <div class="attendance-grid">
      <div class="card attendance-table"><div class="card-title"><div><span>DETALLE POR ASIGNATURA</span><h2>Resumen de faltas</h2></div><button class="button primary small" data-go="justificar">Justificar faltas</button></div>
        <div class="data-table"><div class="data-row head"><span>Asignatura</span><span>Faltas</span><span>Porcentaje</span><span>Nivel</span></div>
        ${attendance.map((row) => `<div class="data-row"><b>${row[0]}</b><span>${row[1]}</span><span>${row[2]}</span><em class="level ${row[3].toLowerCase()}">${row[3]}</em></div>`).join("")}</div>
      </div>
      <div class="card donut-card"><span>DISTRIBUCIÓN</span><h2>Estado de asistencia</h2><div class="donut"><div><b>92,6%</b><small>Asistencia</small></div></div><div class="donut-legend"><span><i class="blue-bg"></i>Clases asistidas <b>289</b></span><span><i class="orange-bg"></i>Faltas <b>23</b></span></div></div>
    </div>`
}

function justifyView() {
  const current = absenceDays[state.absenceDay]
  return `${pageTitle("ASISTENCIA", "Justificar una falta", "Selecciona el día y las horas que deseas justificar.", true)}
    ${
      state.justificationSent
        ? `<div class="success-message">${icon("check")} Justificante enviado. Secretaría revisará la documentación.</div>`
        : ""
    }
    <div class="justify-grid">
      <div class="absence-list"><h3>Faltas pendientes <span>3 días</span></h3>${absenceDays.map((day, index) => `<button class="${state.absenceDay === index ? "active" : ""}" data-absence-day="${index}"><time>${day.date.split(",")[1].trim().split(" ")[0]}<small>${day.date.split(",")[0].slice(0, 3).toUpperCase()}</small></time><span><b>${day.date}</b><small>${day.count} horas sin justificar</small></span>${icon("chevron")}</button>`).join("")}</div>
      <div class="card justify-form">
        <div class="justify-head"><div><span>HORAS A JUSTIFICAR</span><h2>${current.date}</h2></div><button id="toggle-all-slots">${
          state.absenceSlots.length === current.slots.length
            ? "Desmarcar todas"
            : "Justificar todo el día"
        }</button></div>
        <div class="slot-list">${current.slots.map((slot, index) => `<button data-absence-slot="${index}" class="${state.absenceSlots.includes(index) ? "selected" : ""}"><i>${state.absenceSlots.includes(index) ? icon("check", 14) : ""}</i><span>${slot}</span><small>1 hora</small></button>`).join("")}</div>
        <label class="field-label">Motivo de la falta<textarea placeholder="Describe el motivo de tu ausencia..."></textarea></label>
        <label class="upload-box"><input type="file" accept=".pdf,image/*" />${icon("upload")}<span><b>Sube tu justificante</b><small>PDF, JPG o PNG · Máx. 10 MB</small></span><em>Seleccionar archivo</em></label>
        <div class="form-actions"><button class="button secondary" id="cancel-justification">Cancelar justificación</button><button class="button primary" id="send-justification" ${
          state.absenceSlots.length ? "" : "disabled"
        }>Finalizar y enviar</button></div>
      </div>
    </div>`
}

function cvPreview() {
  const names = state.personal.name.trim().split(/\s+/)
  const first = names.slice(0, 1).join(" ")
  const last = names.slice(1).join(" ")
  return `<div class="preview-heading"><div><span>VISTA PREVIA</span><h3>Tu CV en tiempo real</h3></div><i>PDF</i></div>
    <div class="paper">
      <div class="paper-top"><div class="paper-avatar">JM</div><div><h2>${first}<br />${last}</h2><p>Desarrollador de aplicaciones</p></div></div>
      <div class="paper-body"><aside><h4>CONTACTO</h4><p>${state.personal.email.replace("@", "@<br />")}</p><p>${state.personal.phone}</p><p>${state.personal.city}, España</p><h4>IDIOMAS</h4>${state.languages.map((language) => `<p>${language.language} · ${language.certificate}</p>`).join("")}<h4>OTROS</h4><p>Permiso B</p></aside><main><h4>PERFIL</h4><p>Estudiante de DAM con interés en el desarrollo web y las nuevas tecnologías.</p>${
        state.workVisible
          ? "<h4>EXPERIENCIA</h4><b>Desarrollador web en prácticas</b><small>Soluciones Beta S.L. · 2025</small>"
          : ""
      }${
        state.eduVisible
          ? "<h4>FORMACIÓN</h4><b>Desarrollo de Aplicaciones Multiplataforma</b><small>Centro Educativo Altair · 2023—2025</small>"
          : ""
      }</main></div>
    </div>
    <div class="preview-actions"><button class="button secondary" data-cv-notice="Borrador del CV guardado.">Guardar CV</button><button class="button primary" data-cv-notice="PDF generado correctamente.">${icon("file")}Generar CV</button></div>`
}

function cvView() {
  return `${pageTitle("PERFIL PROFESIONAL", "Mi currículum", "Completa tus datos y genera un CV listo para compartir con empresas.")}
    ${
      state.cvNotice
        ? `<div class="success-message">${icon("check")}${state.cvNotice}</div>`
        : ""
    }
    <div class="cv-layout"><div class="cv-forms">
      <section class="card cv-section"><div class="section-number">01</div><div class="section-head"><div><span>INFORMACIÓN BÁSICA</span><h2>Datos personales</h2></div><em>Datos del centro</em></div>
        <div class="personal-grid"><button class="photo-upload"><div>JM</div><span>${icon("upload")}Cambiar foto</span></button><div class="form-grid">
          <label>Nombre completo<input id="cv-name" value="${state.personal.name}" /></label>
          <label>Correo institucional<input id="cv-email" value="${state.personal.email}" /></label>
          <label>Teléfono<input id="cv-phone" value="${state.personal.phone}" /></label>
          <label>Ciudad<input id="cv-city" value="${state.personal.city}" /></label>
        </div></div><button class="text-save" data-cv-notice="Datos personales guardados.">Guardar datos personales</button>
      </section>
      <section class="card cv-section"><div class="section-number">02</div><div class="section-head"><div><span>TRAYECTORIA</span><h2>Experiencia laboral</h2></div><button class="add-button" id="open-work">+ Añadir experiencia</button></div>
        ${
          state.workVisible
            ? `<div class="cv-entry"><span class="entry-logo">SB</span><div><b>Desarrollador web en prácticas</b><p>Soluciones Beta S.L. · Mar 2025 — Actualidad</p></div><button id="edit-work">${icon("edit")}</button><button id="delete-work">${icon("trash")}</button></div>`
            : ""
        }
        ${
          state.cvWorkOpen
            ? `<div class="inline-form"><div class="form-grid"><label>Empresa<input value="Soluciones Beta S.L." /></label><label>Puesto<input value="Desarrollador web en prácticas" /></label><label>Fecha de inicio<input type="month" value="2025-03" /></label><label>Fecha de fin<input type="month" /></label></div><label>Funciones realizadas<textarea placeholder="Describe brevemente tus responsabilidades..."></textarea></label><div class="form-actions"><button class="button secondary" id="cancel-work">Cancelar</button><button class="button primary" id="save-work">Guardar experiencia</button></div></div>`
            : ""
        }
      </section>
      <section class="card cv-section"><div class="section-number">03</div><div class="section-head"><div><span>FORMACIÓN</span><h2>Titulaciones</h2></div><button class="add-button" id="open-edu">+ Añadir titulación</button></div>
        ${
          state.eduVisible
            ? `<div class="cv-entry"><span class="entry-logo blue-logo">FP</span><div><b>Desarrollo de Aplicaciones Multiplataforma</b><p>Centro Educativo Altair · 2023 — 2025</p></div><button id="edit-edu">${icon("edit")}</button><button id="delete-edu">${icon("trash")}</button></div>`
            : ""
        }
        ${
          state.cvEduOpen
            ? `<div class="inline-form"><div class="form-grid"><label>Centro educativo<input value="Centro Educativo Altair" /></label><label>Titulación<input value="Desarrollo de Aplicaciones Multiplataforma" /></label><label>Fecha de inicio<input type="month" value="2023-09" /></label><label>Fecha de fin<input type="month" value="2025-06" /></label></div><label class="mini-upload"><input type="file" />${icon("upload")} Adjuntar título o certificado</label><div class="form-actions"><button class="button secondary" id="cancel-edu">Cancelar</button><button class="button primary" id="save-edu">Guardar titulación</button></div></div>`
            : ""
        }
      </section>
      <section class="card cv-section"><div class="section-number">04</div><div class="section-head"><div><span>OTROS DATOS</span><h2>Información adicional</h2></div></div>
        <div class="toggle-row"><label><input type="checkbox" checked /><i></i>Carnet de conducir</label><label><input type="checkbox" /><i></i>Vehículo propio</label></div>
        <div class="language-section"><div class="language-heading"><div><b>Idiomas y certificaciones</b><small>Añade todos los idiomas que quieras incluir en tu CV.</small></div><button class="add-button" id="open-language">+ Añadir idioma</button></div>
          <div class="language-list">${state.languages.map((language) => `<div class="cv-entry"><span class="entry-logo language-logo">${language.language.slice(0, 2).toUpperCase()}</span><div><b>${language.language} · ${language.certificate}</b><p>${language.file || "Sin archivo acreditativo"}</p></div><button data-edit-language="${language.id}" aria-label="Modificar ${language.language}">${icon("edit")}</button><button data-delete-language="${language.id}" aria-label="Borrar ${language.language}">${icon("trash")}</button></div>`).join("")}</div>
          ${state.cvLanguageOpen ? languageForm() : ""}
        </div><button class="text-save" data-cv-notice="Información adicional guardada.">Guardar información adicional</button>
      </section>
    </div><aside class="cv-preview">${cvPreview()}</aside></div>`
}

function languageForm() {
  const current = state.languages.find(
    (language) => language.id === state.editingLanguage,
  ) || { language: "", certificate: "", file: "" }
  return `<div class="inline-form"><div class="form-grid"><label>Idioma<input id="language-name" value="${current.language}" placeholder="Ej. Inglés" /></label><label>Titulación de idioma<input id="language-certificate" value="${current.certificate}" placeholder="Ej. Cambridge B2 First" /></label></div><label class="mini-upload"><input id="language-file" type="file" accept=".pdf,image/*" />${icon("upload")} <span id="language-file-name">${current.file || "Adjuntar título o certificado"}</span></label><small class="upload-help">PDF, JPG o PNG · Máx. 10 MB</small><div class="form-actions"><button class="button secondary" id="cancel-language">Cancelar</button><button class="button primary" id="save-language">Guardar idioma</button></div></div>`
}

function shell() {
  return `<div class="app-shell"><div class="main-shell">
    <header class="topbar">
      <button class="header-brand" data-go="inicio" aria-label="Volver al inicio"><span class="brand-mark"><img src="${altairLogo}" alt="" /></span><span><b>ALTAIR</b><small>Portal del alumno</small></span></button>
      <div class="header-section"><p>Área personal</p><h2>${titles[state.view]}</h2></div>
      <div class="top-actions"><button class="icon-button">${icon("bell")}<i>3</i></button><div class="profile-menu"><button class="avatar profile-trigger" id="profile-trigger" aria-label="Abrir menú personal" aria-expanded="${state.profileOpen}">JM</button>
      ${
        state.profileOpen
          ? `<div class="profile-dropdown"><div class="profile-dropdown-head"><span class="avatar">JM</span><div><b>Javier Martínez</b><small>2º DAM · Alumno</small></div></div><button data-go="cv">${icon("file")}<span><b>Mi currículum</b><small>Editar y generar mi CV</small></span>${icon("chevron", 15)}</button></div>`
          : ""
      }</div></div>
    </header>
    <main class="content" id="content"></main>
    <footer>© 2025 Centro Educativo Altair · Portal del alumno <span>Privacidad · Soporte</span></footer>
  </div></div>`
}

function currentView() {
  return {
    inicio: homeView,
    tutorias: tutoringView,
    horario: scheduleView,
    faltas: attendanceView,
    justificar: justifyView,
    cv: cvView,
  }[state.view]()
}

function render(scroll = false) {
  document.querySelector("#root").innerHTML = shell()
  document.querySelector("#content").innerHTML = currentView()
  bindEvents()
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" })
}

function go(view) {
  state.view = view
  state.profileOpen = false
  render(true)
}

function notify(message) {
  state.cvNotice = message
  render()
  window.setTimeout(() => {
    if (state.cvNotice === message) {
      state.cvNotice = ""
      render()
    }
  }, 2500)
}

function bindEvents() {
  document
    .querySelectorAll("[data-go]")
    .forEach((button) =>
      button.addEventListener("click", () => go(button.dataset.go)),
    )
  document.querySelector("#profile-trigger")?.addEventListener("click", () => {
    state.profileOpen = !state.profileOpen
    render()
  })
  document.querySelectorAll("[data-calendar-move]").forEach((button) =>
    button.addEventListener("click", () => {
      state.calendarMonth =
        (state.calendarMonth + Number(button.dataset.calendarMove) + 12) % 12
      render()
    }),
  )
  document.querySelectorAll("[data-calendar-day]").forEach((button) =>
    button.addEventListener("click", () => {
      if (state.view === "inicio")
        state.homeDay = Number(button.dataset.calendarDay)
      render()
    }),
  )

  document.querySelectorAll("[data-tutor-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      state.tutorFilter = button.dataset.tutorFilter
      render()
    }),
  )
  document.querySelectorAll("[data-teacher]").forEach((button) =>
    button.addEventListener("click", () => {
      state.teacher = Number(button.dataset.teacher)
      state.tutorSent = false
      render()
    }),
  )
  document.querySelectorAll("[data-tutor-time]").forEach((button) =>
    button.addEventListener("click", () => {
      state.tutorTime = button.dataset.tutorTime
      state.tutorSent = false
      render()
    }),
  )
  document
    .querySelector("#tutor-reason")
    ?.addEventListener("input", (event) => {
      state.tutorReason = event.target.value
    })
  document
    .querySelector("#tutor-duration")
    ?.addEventListener("change", (event) => {
      state.tutorDuration = event.target.value
    })
  document.querySelector("#cancel-tutor")?.addEventListener("click", () => {
    state.tutorTime = ""
    state.tutorReason = ""
    state.tutorSent = false
    render()
  })
  document.querySelector("#send-tutor")?.addEventListener("click", () => {
    state.tutorSent = true
    render()
  })

  document.querySelectorAll("[data-absence-day]").forEach((button) =>
    button.addEventListener("click", () => {
      state.absenceDay = Number(button.dataset.absenceDay)
      state.absenceSlots = []
      state.justificationSent = false
      render()
    }),
  )
  document.querySelectorAll("[data-absence-slot]").forEach((button) =>
    button.addEventListener("click", () => {
      const slot = Number(button.dataset.absenceSlot)
      state.absenceSlots = state.absenceSlots.includes(slot)
        ? state.absenceSlots.filter((item) => item !== slot)
        : [...state.absenceSlots, slot]
      render()
    }),
  )
  document.querySelector("#toggle-all-slots")?.addEventListener("click", () => {
    const slots = absenceDays[state.absenceDay].slots
    state.absenceSlots =
      state.absenceSlots.length === slots.length
        ? []
        : slots.map((_, index) => index)
    render()
  })
  document
    .querySelector("#cancel-justification")
    ?.addEventListener("click", () => {
      state.absenceSlots = []
      state.justificationSent = false
      go("faltas")
    })
  document
    .querySelector("#send-justification")
    ?.addEventListener("click", () => {
      state.justificationSent = true
      render()
    })

  ;["name", "email", "phone", "city"].forEach((field) => {
    document
      .querySelector(`#cv-${field}`)
      ?.addEventListener("input", (event) => {
        state.personal[field] = event.target.value
        document.querySelector(".cv-preview").innerHTML = cvPreview()
        bindPreviewEvents()
      })
  })
  bindPreviewEvents()
  document
    .querySelectorAll("[data-cv-notice]")
    .forEach((button) =>
      button.addEventListener("click", () => notify(button.dataset.cvNotice)),
    )
  document.querySelector("#open-work")?.addEventListener("click", () => {
    state.cvWorkOpen = true
    render()
  })
  document.querySelector("#edit-work")?.addEventListener("click", () => {
    state.cvWorkOpen = true
    render()
  })
  document.querySelector("#delete-work")?.addEventListener("click", () => {
    state.workVisible = false
    render()
  })
  document.querySelector("#cancel-work")?.addEventListener("click", () => {
    state.cvWorkOpen = false
    render()
  })
  document.querySelector("#save-work")?.addEventListener("click", () => {
    state.workVisible = true
    state.cvWorkOpen = false
    notify("Experiencia guardada.")
  })
  document.querySelector("#open-edu")?.addEventListener("click", () => {
    state.cvEduOpen = true
    render()
  })
  document.querySelector("#edit-edu")?.addEventListener("click", () => {
    state.cvEduOpen = true
    render()
  })
  document.querySelector("#delete-edu")?.addEventListener("click", () => {
    state.eduVisible = false
    render()
  })
  document.querySelector("#cancel-edu")?.addEventListener("click", () => {
    state.cvEduOpen = false
    render()
  })
  document.querySelector("#save-edu")?.addEventListener("click", () => {
    state.eduVisible = true
    state.cvEduOpen = false
    notify("Titulación guardada.")
  })
  document.querySelector("#open-language")?.addEventListener("click", () => {
    state.editingLanguage = null
    state.cvLanguageOpen = true
    render()
  })
  document.querySelectorAll("[data-edit-language]").forEach((button) =>
    button.addEventListener("click", () => {
      state.editingLanguage = Number(button.dataset.editLanguage)
      state.cvLanguageOpen = true
      render()
    }),
  )
  document.querySelectorAll("[data-delete-language]").forEach((button) =>
    button.addEventListener("click", () => {
      state.languages = state.languages.filter(
        (language) => language.id !== Number(button.dataset.deleteLanguage),
      )
      render()
    }),
  )
  document.querySelector("#cancel-language")?.addEventListener("click", () => {
    state.cvLanguageOpen = false
    state.editingLanguage = null
    render()
  })
  document
    .querySelector("#language-file")
    ?.addEventListener("change", (event) => {
      document.querySelector("#language-file-name").textContent =
        event.target.files?.[0]?.name || "Adjuntar título o certificado"
    })
  document.querySelector("#save-language")?.addEventListener("click", () => {
    const language = document.querySelector("#language-name").value.trim()
    const certificate = document
      .querySelector("#language-certificate")
      .value.trim()
    const file =
      document.querySelector("#language-file").files?.[0]?.name ||
      document.querySelector("#language-file-name").textContent
    if (!language || !certificate) return
    if (state.editingLanguage !== null) {
      state.languages = state.languages.map((item) =>
        item.id === state.editingLanguage
          ? { ...item, language, certificate, file }
          : item,
      )
    } else {
      state.languages.push({
        id: Date.now(),
        language,
        certificate,
        file: file === "Adjuntar título o certificado" ? "" : file,
      })
    }
    state.cvLanguageOpen = false
    state.editingLanguage = null
    notify("Idioma guardado.")
  })
}

function bindPreviewEvents() {
  document
    .querySelectorAll(".cv-preview [data-cv-notice]")
    .forEach((button) =>
      button.addEventListener("click", () => notify(button.dataset.cvNotice)),
    )
}

render()
