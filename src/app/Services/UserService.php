<?php
namespace App\Services;
use App\Models\User;

class UserService {
    private static $page_length = 30;
    public static function getAllUsers()
    {
        $users = User::get();
        return $users;
    }
    public static function getAllUsersPaginated()
    {
        $users = User::query()
        ->select('*')
        ->paginate(UserService::$page_length);
        return $users;
    }
}