<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'content' // Content of the post (string)
    ];
    /**
     * @var array
     */
    protected $appends = ['like_count', 'is_liked', 'user_name'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likedByUsers()
    {
        return $this->belongsToMany(User::class, 'likes', 'post_id', 'user_id');
    }
    protected function likeCount(): Attribute
    {
        return new Attribute(
            get: fn () => $this->likedByUsers()->count(),
        );
    }

    protected function isLiked(): Attribute
    {
        return new Attribute(
            get: fn () => $this->likedByUsers->contains(auth()->id()),
        );
    }

    protected function userName(): Attribute
    {
        return new Attribute(
            get: fn () => $this->user->name
        );
    }
}
