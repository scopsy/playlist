abstract class WeWillRockYou {

    public artist: string = "Queen";

}

class WeWillForkYou extends WeWillRockYou {

    public partA: string = `
        Buddy you're a boy make a big noise
        Playin' in the street gonna be a big dev some day

        You got zero tests,
        a big disgrace,
        Memory leaks all over the place
        Singin
  `;

    public chorus: string = `
        We will we will fork you
        We will we will fork you
  `;

    public partB: string = `
        Buddy you're a young man hard man
        Shoutin' in the street gonna have a lot of stars some day

        Your code is a mess,
        a big disgrace,
        Somebody better open a pull request
     `;

    public partC: string = `
    `;

}

new WeWillForkYou();
