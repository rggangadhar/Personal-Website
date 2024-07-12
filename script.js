document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.code === 'KeyL') {
        document.getElementById('easter-egg').classList.remove('hidden');
        document.getElementById('easter-egg').style.display = 'flex'; 
        // Show the easter egg
    }
});