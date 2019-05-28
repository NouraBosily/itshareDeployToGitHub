
export class PostCallBack {
    posts: any;
    getCallBack = (response) => {
        this.posts = response;
        localStorage.setItem('DBPosts', JSON.stringify(this.posts));
    }

}
