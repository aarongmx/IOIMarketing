<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->nombre = "Mary An";
        $user->apellido_paterno = "Lara";
        $user->apellido_materno = "Zaragoza";
        $user->email = "maryan@gmail.com";
        $user->password = Hash::make("maryan");
        $user->slug= 'mary-an';
        $user->plan_id = 1;
        $user->provider_id = "myalz";
        $user->save();

        $user2 = new User();
        $user2->nombre = "Aarón";
        $user2->apellido_paterno = "Gómez";
        $user2->apellido_materno = "Méndez";
        $user2->email = "aaron.gomez@live.com";
        $user2->password = Hash::make("aaron");
        $user2->slug= 'aaron';
        $user2->provider_id = "aagmx";
        $user2->plan_id = 3;
        $user2->save();
    }
}
