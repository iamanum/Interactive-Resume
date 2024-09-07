var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');

// Show or hide the skills section when the button is clicked

toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
