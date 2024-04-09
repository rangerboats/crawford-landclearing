
    document.getElementById('landClearingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    var landSize = parseFloat(document.getElementById('landSize').value);
    var vegetationType = document.getElementById('vegetationType').value;
    var terrain = document.getElementById('terrain').value;
    var stumpRemoval = document.getElementById('stumpRemoval').checked;
    var grubbing = document.getElementById('grubbing').checked;

    
    var baseRatePerAcre = 500; 
    var vegetationFactor = getVegetationFactor(vegetationType);
    var terrainFactor = getTerrainFactor(terrain);
    var additionalServicesCost = getAdditionalServicesCost(stumpRemoval, grubbing);

    var totalEstimate = (baseRatePerAcre * landSize * vegetationFactor * terrainFactor) + additionalServicesCost;

    
    document.getElementById('estimateResult').innerText = "Estimated cost: $" + totalEstimate.toFixed(2);
});

function getVegetationFactor(vegetationType) {
    
    switch (vegetationType) {
        case 'Grass':
            return 1;
        case 'Shrubs':
            return 1.5;
        case 'Trees':
            return 2;
        case 'Forest':
            return 3;
        default:
            return 1; 
    }
}

function getTerrainFactor(terrain) {
    
    switch (terrain) {
        case 'Flat':
            return 1;
        case 'Sloped':
            return 1.5;
        case 'Rough':
            return 2;
        default:
            return 1; 
    }
}

function getAdditionalServicesCost(stumpRemoval, grubbing) {
    
    var totalCost = 0;
    if (stumpRemoval) {
        totalCost += 2000; 
    }
    if (grubbing) {
        totalCost += 1500; 
    }
    return totalCost;
}