export const resources = [{
    "ProductID": "1",
    "ResourceTitle": "Books",
    "ResourceImage": "https://images-na.ssl-images-amazon.com/images/I/515JL42NLCL._SX329_BO1,204,203,200_.jpg",
    "ResourceDescripton": "Madame Bovary, Flaubert's debut novel, is a masterpiece for a number of reasons. First, it is a stunning and unique exploration of the French Revolution, with each character representing a different idea prevalent at that time - very clever."
},
];

export const categories = [...resources.reduce((a, c) => {
    a.add(c.ProductCategory);
    return a;
}, new Set())];