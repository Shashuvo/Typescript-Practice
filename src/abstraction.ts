//oop : abstraction => get idea first and implementation later

//<--interface->

//idea
interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

//implementation

class MusicPlayer implements MediaPlayer {
    play() {
        console.log("Playing music...");
    }
    pause() {
        console.log("Pausing music...");
    }
    stop() {
        console.log("Stopping music...");
    }
}


const myPlayer = new MusicPlayer();

myPlayer.play();
myPlayer.pause()
myPlayer.stop();



//<--abstract class-->

// idea
abstract class Interaction {
    abstract follow(): void;
    abstract unfollow(): void;
    abstract block(): void;
}

// implementation

class Interact extends Interaction {
    follow() {
        console.log("started following...");
    }
    unfollow() {
        console.log("stopped following...");
    }
    block() {
        console.log("blocking...");
    }
}

const user = new Interact();

user.follow();
user.unfollow();
user.block();