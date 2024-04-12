<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class FollowTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_user_can_follow_other_users(): void
    {
        $popular_user = User::factory()->create();

        $first_follower = User::factory()->create();
        $first_follower->followed()->save($popular_user);

        $second_follower = User::factory()->create();
        $second_follower->followed()->save($popular_user);

        $this->assertEquals(2, count($popular_user->followers));
    }
}
