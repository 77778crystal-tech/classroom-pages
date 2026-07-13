(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const c=[{id:"present-simple",label:"Present Simple",cn:"一般现在时",badge:"讲事实",icon:"↻",cue:"稳定、反复、一直如此",accent:"#2563eb",soft:"#eef4ff",summary:"描述稳定事实、规律、职责、流程或产品能力。",formula:{top:["Be 动词：am / is / are"],groups:[{title:"实义动词（Action Verbs）：",items:[["I / we / you / they + 原形","e.g. manage, support, review"],["he / she / it + -s / -es","e.g. manages, supports, reviews"]]}]},usage:[["现在负责的工作 / 职责","I handle weekly user feedback reports.","我负责处理每周的用户反馈报告。","handle"],["固定流程 / 日常工作","We review user data every Friday.","我们每周五复盘用户数据。","review"],["系统能力 / 产品功能","This dashboard shows weekly active users.","这个看板展示每周活跃用户。","shows"]]},{id:"past-simple",label:"Past Simple",cn:"一般过去时",badge:"复盘过去",icon:"◷",cue:"过去发生，已经结束",accent:"#d4542f",soft:"#fff1ed",summary:"描述过去已经发生、已经完成、已经变成历史背景的事情。",formula:{top:["Be 动词: was / were"],groups:[{title:"实义动词 (Action Verbs):",items:[["Regular (规则): base form + -ed","(e.g. joined, worked, switched)"],["Irregular (不规则):","(e.g. be → was/were, get → got, lead → led)"]]}]},usage:[["过去做过的项目 / 完成的工作","I worked on a recommendation system.","我做过推荐系统。","worked"],["遇到的问题 / 挑战","We faced a scalability issue.","我们遇到了扩展性问题。","faced"],["过去的状态 / 身份","The company was a startup before 2020.","2020 年前公司还是初创企业。","was"]]},{id:"present-continuous",label:"Present Continuous",cn:"现在进行时",badge:"正在推进",icon:"⇢",cue:"此刻或当前阶段进行中",accent:"#0f766e",soft:"#eafff9",summary:"描述此刻或当前阶段正在推进的任务、临时安排、变化趋势。",formula:{top:["Be 动词：am / is / are"],groups:[{title:"实义动词（Action Verbs）：",items:[["动词 + -ing"],["e.g. I am working"],["you / we / they are working"],["he / she / it is working"]]}]},usage:[["当前正在推进的任务","I am working on the onboarding flow this week.","我这周正在做新用户引导流程。","am working"],["阶段性的临时安排","We are testing a new feedback form this month.","我们这个月正在测试一版新的反馈表。","are testing"],["正在发生的变化 / 趋势","User requests are increasing after the launch.","产品上线后，用户需求正在增加。","are increasing"]]},{id:"present-perfect",label:"Present Perfect",cn:"现在完成时",badge:"结果到现在",icon:"✓",cue:"已经完成，但现在还重要",accent:"#7c3aed",soft:"#f4efff",summary:"强调已经完成的动作，以及它对现在的结果、进度或经验意义。",formula:{top:["have / has + 过去分词"],groups:[{title:"实义动词 (Action Verbs):",items:[["Regular (规则): base form + -ed","(e.g. reviewed, improved, tested)"],["Irregular (不规则):","(e.g. do → done, make → made, write → written)"]]}]},usage:[["已经完成，结果影响现在","We have fixed the login issue.","问题已经解决了。","have fixed"],["到目前为止完成的进度","The team has reviewed three design options so far.","团队到目前为止已经评审了三个设计方案。","has reviewed"],["过往经验 / 经历表达","I have worked on several user growth projects.","我参与过几个用户增长项目。","have worked"]]}],d=document.querySelector("#deck"),b=document.querySelector("#progressFill");let i=0;const p=c.map(()=>0),u=c.map(()=>!1);function w(e,t){const r=p[t],[o,a,s,l]=e.usage[r];return`
    <article
      class="tense-card ${t===i?"is-active":""}"
      style="--accent:${e.accent};--soft:${e.soft}"
      aria-label="${e.label} ${e.cn}"
    >
      <header class="card-head">
        <span class="card-icon" aria-hidden="true">${e.icon}</span>
        <div>
          <span class="badge">${e.badge}</span>
          <h3>${e.label} <span>${e.cn}</span></h3>
        </div>
      </header>

      <div class="decision-panel">
        <p class="cue">${e.cue}</p>
        <button
          class="formula-toggle ${u[t]?"is-open":""}"
          data-formula="${t}"
          type="button"
        >
          ${u[t]?"收起时态变化":"点我看时态变化"}
        </button>
        <div class="scene-picker" aria-label="${e.cn} workplace scenes">
          ${e.usage.map(([v],m)=>`
            <button
              class="${m===r?"is-selected":""}"
              data-example="${m}"
              data-owner="${t}"
              type="button"
            >
              ${v}
            </button>
          `).join("")}
        </div>
      </div>

      <div class="spotlight-panel">
        <span class="spotlight-label">场景例句</span>
        <h4>${o}</h4>
        <p class="example-en">${$(a,l)}</p>
        <p class="example-cn">${s}</p>
      </div>

      ${u[t]?`
        <div class="formula-overlay">
          <button class="formula-close" data-formula="${t}" type="button">收起时态变化 ↑</button>
          <div class="formula">
            <strong>变化形式</strong>
            ${y(e.formula)}
          </div>
        </div>
      `:""}
    </article>
  `}function y(e){return`
    <div class="formula-tree">
      ${e.top.map(t=>`<div class="formula-top">${t}</div>`).join("")}
      ${e.groups.map(t=>`
        <section class="formula-group">
          <h5>${t.title}</h5>
          <div class="formula-children">
            ${t.items.map(r=>`
              <div class="formula-child">
                ${r.map((o,a)=>`<span class="${a>0?"is-example":""}">${o}</span>`).join("")}
              </div>
            `).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  `}function $(e,t){if(!t)return e;const r=e.indexOf(t);if(r===-1)return e;const o=r+t.length;return`${e.slice(0,r)}<mark>${e.slice(r,o)}</mark>${e.slice(o)}`}function f(){d.innerHTML=c.map(w).join(""),g()}function g(){document.querySelectorAll("[data-card]").forEach(e=>{e.classList.toggle("is-active",Number(e.dataset.card)===i)}),document.querySelectorAll(".tense-card").forEach((e,t)=>{e.classList.toggle("is-active",t===i)}),b.style.width=`${(i+1)/c.length*100}%`}function n(e){i=(e+c.length)%c.length,g()}document.addEventListener("click",e=>{const t=e.target.closest("[data-card]");if(t){n(Number(t.dataset.card));return}const r=e.target.closest("[data-example]");if(r){const s=Number(r.dataset.owner);p[s]=Number(r.dataset.example),f();return}const o=e.target.closest("[data-formula]");if(o){const s=Number(o.dataset.formula);u[s]=!u[s],f();return}const a=e.target.closest("[data-action]");a&&(a.dataset.action==="prev"&&n(i-1),a.dataset.action==="next"&&n(i+1))});d.addEventListener("keydown",e=>{e.key==="ArrowLeft"&&n(i-1),e.key==="ArrowRight"&&n(i+1)});let h=0;d.addEventListener("pointerdown",e=>{h=e.clientX});d.addEventListener("pointerup",e=>{const t=e.clientX-h;Math.abs(t)<48||n(i+(t<0?1:-1))});f();
