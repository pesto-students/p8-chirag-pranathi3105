const findJudge = (N, trust) => {
    let likesCountList = {}
    let beingLikedCountList = {}

    for (let i = 1; i <= N; i++) {
        likesCountList[i] = 0
        beingLikedCountList[i] = 0
    }

    for (let ele of trust) {
        likesCountList[ele[0]]++
            beingLikedCountList[ele[1]]++
    }

    //variable to store potential judge

    let judge = 0
        //if the element doesn't give out any likes
        //it is the potantial judge
    for (key in likesCountList) {
        if (likesCountList[key] === 0)
            judge = key;
    }

    //if the potential judge receives likes from everybody other than itself
    //it means it is the judge
    //otherwise judge doesn't exist

    if (beingLikedCountList[judge] === N - 1)
        return judge;
    else
        return -1;



};


console.log(findJudge(3, [
    [1, 2],
    [2, 3],
    [3, 1]
]));