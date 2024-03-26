function delayMessage(seconds) {
    const milliseconds = seconds * 1000;

    setTimeout(
        () => console.log(`Tempo de ${seconds} segundos decorridos!`),
        milliseconds
    );
}
