$(function() {
  // Basics
  // ------

  $('#cv-name').text(data.basics.name);
  $('#cv-phone').text(data.basics.phone);
  $('#cv-email').text(data.basics.email);
  $('#cv-address').text(data.basics.address);

  // Experience
  // ----------

  data.experience.forEach(function(obj, index) {
    var $section = $('#experience-section');
    var $subsection = $('#experience-skel').clone();

    $subsection.attr('id', 'experience-' + index).show();
    $section.append($subsection);

    $subsection.find('.company').text(obj.company);
    $subsection.find('.time-period').text(obj.timePeriod);
    $subsection.find('.position').text(obj.position);
    $subsection.find('.summary').text(obj.summary);
  });

  // Education
  // ---------

  data.education.forEach(function(obj, index) {
    var $section = $('#education-section');
    var $subsection = $('#education-skel').clone();

    $subsection.attr('id', 'education-' + index).show();
    $section.append($subsection);

    $subsection.find('.institution').text(obj.institution);
    $subsection.find('.time-period').text(obj.timePeriod);
    $subsection.find('.area').text(obj.area);
  });

  // Skills
  // ------

  data.skills.forEach(function(text, index) {
    var $wrapper = $('#skills-wrapper');
    var $item = $('#skill-skel').clone();

    $item.attr('id', 'skill-' + index).text(text).show();
    $wrapper.append($item);
  });

  // Certificates
  // ------------

  data.certificates.forEach(function(obj, index) {
    var $section = $('#certificates-section');
    var $subsection = $('#certificate-skel').clone();

    $subsection.attr('id', 'certificate-' + index).show();
    $section.append($subsection);

    console.log(obj)

    $subsection.find('.institution').text(obj.institution);
    $subsection.find('.time-period').text(obj.timePeriod);
    $subsection.find('.course').text(obj.course);
  });
});