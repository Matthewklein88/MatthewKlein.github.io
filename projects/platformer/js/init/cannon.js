(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createCannon(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */
    function init(game) {
        let createCannon = cannon.create;
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
      
        createCannon("top", 450, 40000);
        createCannon("top", 500, 40000);
        createCannon("top", 550, 40000);
        createCannon("top", 600, 40000);
        createCannon("top", 650, 40000);
        createCannon("top", 700, 40000);
        createCannon("top", 750, 40000);
        createCannon("top", 800, 40000);
        createCannon("top", 850, 40000);
        createCannon("top", 900, 40000);
        createCannon("top", 400, 40000);
        createCannon("top", 350, 40000);
        createCannon("top", 300, 40000);
        createCannon("top", 250, 40000);
        createCannon("top", 200, 40000);
        createCannon("top", 150, 40000);
        createCannon("top", 100, 40000);
        createCannon("top", 50, 40000);
        createCannon("top", 0, 40000);
        createCannon("top", 450, 40000);
        createCannon("right", 620, 5000);
        createCannon("right", 620, 5500);
        createCannon("right", 620, 6000);
        createCannon("right", 620, 6500);
        createCannon("right", 620, 7000);
        createCannon("right", 620, 7500);
        createCannon("right", 620, 8000);
        createCannon("right", 620, 8500);
        createCannon("right", 620, 9000);
        createCannon("right", 620, 9500);
        createCannon("right", 620, 10000);
        createCannon("right", 620, 10500);
        createCannon("right", 620, 11000);
        createCannon("right", 620, 11500);
        createCannon("right", 620, 12000);
        createCannon("right", 620, 12500);
        createCannon("right", 620, 13000);

        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
