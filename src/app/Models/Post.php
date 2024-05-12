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
    protected $appends = ['like_count'];

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
}
