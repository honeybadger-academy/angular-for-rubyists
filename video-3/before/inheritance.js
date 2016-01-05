// This example shows how prototypical inheritance works

parent = Object.create();
parent.firstName = "Bob";
parent.lastName = "Hope";

child = Object.create(parent);
child.firstName = "Mary";

child.firstName // "Mary"
child.lastName  // "Hope"

grandchild = Object.create(child);

child.firstName = "Jim";

grandchild.firstName // "Jim"
grandchild.lastName  // "Hope"

parent.lastName = "Smith"

child.lastName // "Smith"
granchild.lastName // "Smith"

