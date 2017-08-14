function getMiddleCharacter(text) {
    return (text.length % 2 == 1) ? text.substring((text.length) / 2, ((text.length) / 2) + 1) : text.substring(((text.length) / 2) - 1, (((text.length) / 2) - 1) + 2)
}