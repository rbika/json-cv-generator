$(function() {
  var $section, $skel, $item;

  // Basics
  // ------
  $('.cv-name').text(data.basics.name);
  $('.cv-phone').text(data.basics.phone);
  $('.cv-email').text(data.basics.email);
  $('.cv-address').text(data.basics.address);

  // Work Experience
  // ---------------
  $section = $('#experience-section');
  $skel = $section.find('.subsection--skel');

  data.experience.forEach(function(obj, index) {
    $item = $skel.clone();
    $section.append($item);
    $item.find('.cv-company').text(obj.company);
    $item.find('.cv-time-period').text(obj.timePeriod);
    $item.find('.cv-position').text(obj.position);
    $item.find('.cv-summary').text(obj.summary);
    $item.removeClass('subsection--skel');
  });

  // Education
  // ---------
  $section = $('#education-section');
  $skel = $section.find('.subsection--skel').clone();

  data.education.forEach(function(obj, index) {
    $item = $skel.clone();
    $section.append($item);
    $item.find('.cv-institution').text(obj.institution);
    $item.find('.cv-time-period').text(obj.timePeriod);
    $item.find('.cv-area').text(obj.area);
    $item.removeClass('subsection--skel');
  });

  // Skills
  // ------
  $section = $('#skills-section');
  $skel = $section.find('.section__skill--skel').clone();

  data.skills.forEach(function(text, index) {
    $item = $skel.clone();
    $section.find('.section__skills').append($item);
    $item.text(text);
    $item.removeClass('section__skill--skel');
  });

  // Certificates
  // ------------
  $section = $('#certificates-section');
  $skel = $section.find('.subsection--skel');

  data.certificates.forEach(function(obj, index) {
    $item = $skel.clone();
    $section.append($item);
    $item.find('.cv-institution').text(obj.institution);
    $item.find('.cv-time-period').text(obj.timePeriod);
    $item.find('.cv-course').text(obj.course);
    $item.removeClass('subsection--skel');
  });
});