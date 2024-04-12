<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Post;

class CreatePostTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_user_can_create_posts(): void
    {
        $user = User::factory()->create();
        $usersPost = Post::factory()->create(['user_id' => $user->id]);
        $user->posts()->save($usersPost);
        $this->assertNotTrue(empty($user->posts));
    }
}
