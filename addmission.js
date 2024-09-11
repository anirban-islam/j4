function calculateFinalScore(obj){

    if (typeof obj !== 'object' || obj === null) {

        return "Invalid Input";
    }

    const deatils = ['name', 'testScore', 'schoolGrade', 'isFFamily'];

    for (const key of deatils) {
        if (!(key in obj)) {

            return "Invalid Input";
        }

    if (typeof obj.name !== 'string') {
      return "Invalid Input";
    }
    if (typeof obj.testScore !== 'number' || obj.testScore < 0 || obj.testScore > 50) {
        return "Invalid Input";
    }
    if (typeof obj.schoolGrade !== 'number' || obj.schoolGrade < 0 || obj.schoolGrade > 30) {
        return "Invalid Input";
    }
    if (typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
        finalScore += 20;
    }
    return finalScore >= 80;

}
}
