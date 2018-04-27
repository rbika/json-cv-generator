<template>
  <div id="app">
    <div class="header">
      <h1 class="header__name">{{ data.basics.name }}</h1>
      <div class="header__contact-info"><i class="fa fa-phone"></i>{{ data.basics.phone }}</div>
      <div class="header__contact-info"><i class="fa fa-envelope"></i>{{ data.basics.email }}</div>
      <div class="header__contact-info"><i class="fa fa-map-marker"></i>{{ data.basics.address }}</div>
    </div>

    <div class="content">
      <!-- Work experience -->
      <div id="experience-section" class="section">
        <h1 class="section__title">{{ data.experience.sectionName }}</h1>

        <div v-for="(item, i) in data.experience.items" :key="`experience-${i}`" class="subsection">
          <h2 class="subsection__title">{{ item.company }}</h2>
          <span class="subsection__time-period">{{ item.timePeriod }}</span>
          <h3 class="subsection__subtitle">{{ item.position }}</h3>
          <ul class="subsection__summary">
            <li v-for="(subitem, i) in item.summaryList" :key="`summary-${i}`">{{ subitem }}</li>
          </ul>
        </div>
      </div>

      <!-- Education -->
      <div id="education-section" class="section">
        <h1 class="section__title">{{ data.education.sectionName }}</h1>

        <div v-for="(item, i) in data.education.items" :key="`education-${i}`" class="subsection">
          <h2 class="subsection__title">{{ item.institution }}</h2>
          <span class="subsection__time-period">{{ item.timePeriod }}</span>
          <p class="subsection__area">{{ item.area }}</p>
        </div>
      </div>

      <!-- Skills -->
      <div id="skills-section" class="section">
        <h1 class="section__title">{{ data.skills.sectionName }}</h1>

        <div class="section__skills">
          <span v-for="(skill, i) in data.skills.items" :key="`skill-${i}`" class="section__skills__skill">{{ skill }}</span>
        </div>
      </div>

      <!-- Certificates -->
      <div id="certificates-section" class="section">
        <h1 class="section__title">{{ data.certificates.sectionName }}</h1>

        <div v-for="(item, i) in data.certificates.items" :key="`certificate-${i}`" class="subsection">
          <h2 class="subsection__title">{{ item.course }}</h2>
          <span class="subsection__time-period">{{ item.timePeriod }}</span>
          <p class="subsection__institurion">{{ item.institution }}</p>
        </div>
      </div>

      <!-- Languages -->
      <div id="languages-section" class="section">
        <h1 class="section__title">{{ data.languages.sectionName }}</h1>

        <div v-for="(item, i) in data.languages.items" :key="`language-${i}`" class="subsection">
          <h2 class="subsection__title">{{ item.language }}</h2>
          <p class="subsection__institurion">{{ item.proficiency }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './data.json';

export default {
  data() {
    return {
      data: data
    }
  }
}
</script>

<style>
/* ---------- Base ---------- */
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #424242;
}

/* ---------- Layout ---------- */
.header {
  text-align: center;
  margin: 20px auto 0;
  width: 700px;
}
.content {
  margin: 30px auto;
  width: 700px;
}

/* ---------- Header ---------- */
.header__name {
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 400;
}
.header__contact-info {
  display: inline-block;
  margin: 0 10px;
}
.header__contact-info > i {
  margin-right: 5px;
  font-size: 16px;
}

/* ---------- Section ---------- */
.section {
  margin-top: 25px;
}
.section__title {
  border-bottom: 1px solid #ddd;
  font-size: 19px;
  font-weight: 400;
}
.section__skills {
  padding: 10px 20px 0 20px;
}
.section__skills__skill {
  padding: 5px 7px;
  display: inline-block;
  margin: 10px 9px 0 0;
  background-color: #ddd;
  border-radius: 4px;
  -webkit-print-color-adjust: exact;
}

/* ---------- Subsection ---------- */
.subsection {
  margin-top: 15px;
  padding: 0 20px;
}
.subsection__title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 3px;
  display: inline-block;
}
.subsection__time-period {
  font-size: 12px;
  font-weight: 400;
  margin-left: 5px;
}
.subsection__subtitle {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 3px;
}
.subsection__summary > li {
  margin-left: 16px;
  margin-bottom: 5px;
  width: 660px;
}
#languages-section .subsection {
  display: inline-block;
}
</style>
