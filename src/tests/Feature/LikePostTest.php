<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Post;

class LikePostTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $user = User::factory()->create();
        $usersPost = Post::factory()->create(['user_id' => $user->id]);
        $user->posts()->save($usersPost);

        $second_user = User::factory()->create();
        $second_user->likedPosts()->save($usersPost);

        $third_user = User::factory()->create();
        $third_user->likedPosts()->save($usersPost);
        
        $this->assertEquals(count($usersPost->likedByUsers), 2);
    }
}
