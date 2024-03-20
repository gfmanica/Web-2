function hasOneEqualElementInLists(listOne, listTwo) {
    return listOne.some((itemListOne) =>
        listTwo.some((itemListTwo) => itemListTwo === itemListOne)
    );
}
