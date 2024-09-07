document.addEventListener('DOMContentLoaded', function() {
    const toggleSkillsButton = document.getElementById('toggle-skills');
    const skillsSection = document.getElementById('skills');

    // Ensure the elements exist before adding the event listener
    if (toggleSkillsButton && skillsSection) {

        skillsSection.style.display = 'block'; 

        // Show or hide the skills section when the button is clicked
        toggleSkillsButton.addEventListener('click', function() {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            } else {
                skillsSection.style.display = 'none';
            }
        });
    } else {
        console.error('Toggle button or skills section not found in the document.');
    }
});
