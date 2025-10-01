document.addEventListener('DOMContentLoaded', function() {
    const fishes = document.querySelectorAll('.fish');
    const startBtn = document.querySelector('.overlay');
    let currentFishIndex = 0;
    
    startBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Если дошли до конца массива - сбрасываем всё
        if (currentFishIndex >= fishes.length) {
            resetAllFishes();
            currentFishIndex = 0;
            console.log('Все рыбки активированы, сбрасываем');
            return;
        }
        
        // Добавляем класс текущей рыбке (предыдущие остаются активными)
        fishes[currentFishIndex].classList.add('fish-time');
        console.log(`Активирована рыбка ${currentFishIndex + 1}`);
        
        currentFishIndex++;
    });
    
    function resetAllFishes() {
        fishes.forEach(fish => {
            fish.classList.remove('fish-time');
        });
    }
});