import { NumbersCollection } from "./numbersCollection";
import { CharactersCollection } from "./charactersCollection";
import { LinkedList } from "./linkedList";

const collectionNumbers = new NumbersCollection([7, 2, 101, 6, -5]);
collectionNumbers.sort();
console.log(collectionNumbers.data);

const charactersCollection = new CharactersCollection("nvzldjba");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(-30);
linkedList.add(-5);
linkedList.add(63);
linkedList.add(17);
linkedList.add(25);
linkedList.sort();
linkedList.print();



