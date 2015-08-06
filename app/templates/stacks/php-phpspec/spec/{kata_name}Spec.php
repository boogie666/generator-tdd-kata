<?php

namespace spec\TDDKatas;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class <%= kata.pascalized %>Spec extends ObjectBehavior
{
    /**
     * This sample test proves everything works.  Delete it and add your own.
     */
    function it_is_initializable()
    {
        $this->shouldHaveType('TDDKatas\StringCalculator');
    }
}
