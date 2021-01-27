function scoreGold(gold) {
    if (gold === 0) {
        return 'poor';   
    }
    else if (gold < 50) {
        return 'modest';   
    }
    return 'rich';
}

export default scoreGold;