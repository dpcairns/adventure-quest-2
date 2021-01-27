function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 35) {
        return 'frail';
    }
    return 'healthy';
}

export default scoreHp;