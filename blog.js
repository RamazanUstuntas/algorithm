const posts = [
    {postno:"Post 1", postValue:"Bu birinci deneme yazısıdır. Güle Güle!"},
    {postno:"Post 2", postValue:"Bu ikinci deneme yazısıdır. Görüşmek üzere!!"},
    {postno:"Post 3", postValue:"Bu üçüncü deneme yazısıdır. Kendine iyi bak!!!"}
];

const listPosts = () => {
    posts.map(post => {
        console.log(post.postno, post.postValue);
    })
}

const addPost = (newPost) => {
    const Promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject("BİR HATA VAR.!!");
    })
    return Promise1;
}

async function showPosts () {
    try{
        listPosts();
        console.log("\n", "-".repeat(20) );
        await addPost({postno:"Post 42", postValue:"Bu sonradan eklenen yeni bir postumuzdur. Kendine çok çok iyi bak..!!"});
        listPosts();
    } catch(err) {
        console.log(err);
    }
}

showPosts();