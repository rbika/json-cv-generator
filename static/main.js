$(function() {
  var $section, $skel, $item;

  // Basics
  // ------
  $('.js-name').text(data.basics.name);
  $('.js-phone').text(data.basics.phone);
  $('.js-email').text(data.basics.email);
  $('.js-address').text(data.basics.address);

  // Work Experience
  // ---------------
  $section = $('#experience-section');
  $skel = $section.find('.subsection--skel');

  data.experience.forEach(function(obj, index) {
    $item = $skel.clone();
    $section.append($item);
    $item.find('.js-company').text(obj.company);
    $item.find('.js-time-period').text(obj.timePeriod);
    $item.find('.js-position').text(obj.position);
    $item.find('.js-summary').text(obj.summary);
    $item.removeClass('subsection--skel');
  });

  // Education
  // ---------
  $section = $('#education-section');
  $skel = $section.find('.subsection--skel').clone();

  data.education.forEach(function(obj, index) {
    $item = $skel.clone();
    $section.append($item);
    $item.find('.js-institution').text(obj.institution);
    $item.find('.js-time-period').text(obj.timePeriod);
    $item.find('.js-area').text(obj.area);
    $item.removeClass('subsection--skel');
  });

  // Skills
  // ------
  $section = $('#skills-section');
  $skel = $section.find('.section__skills__skill--skel').clone();

  data.skills.forEach(function(text, index) {
    $item = $skel.clone();
    $section.find('.section__skills').append($item);
    $item.text(text);
    $item.removeClass('section__skills__skill--skel');
  });

  // Certificates
  // ------------
  $section = $('#certificates-section');
  $skel = $section.find('.subsection--skel');

  data.certificates.forEach(function(obj, index) {
    $item = $skel.clone();
    $section.append($item);
    $item.find('.js-institution').text(obj.institution);
    $item.find('.js-time-period').text(obj.timePeriod);
    $item.find('.js-course').text(obj.course);
    $item.removeClass('subsection--skel');
  });
});