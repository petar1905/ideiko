<?php
namespace App\Services;
use App\Models\User;
use App\Models\Post;
class PostService {
    private static $page_length = 30;

    public static function getAllPostsPaginated()
    {
        $posts = Post::query()->paginate(PostService::$page_length);
        return $posts;
    }
    public static function getPostsPaginated(User $user) {
        $posts = $user->posts()->paginate(PostService::$page_length);
        return $posts;
    }

    public static function getLikedPostsPaginated(User $user) {
        $posts = $user->likedPosts()->paginate(PostService::$page_length);
        return $posts;
    }
}