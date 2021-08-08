import React from 'react'

const Buttons = () => {
    return (
        <div className="gs-content card m-3 p-3">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Examples</h4>
                                <p class="text-muted m-b-30 font-14">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
                                <div class="button-items"><button class="btn btn-primary">primary</button> <button class="btn btn-secondary">secondary</button> <button class="btn btn-success">success</button> <button class="btn btn-info">info</button> <button class="btn btn-warning">warning</button> <button class="btn btn-danger">danger</button> <button class="btn btn-dark waves-effect waves-light btn btn-secondary">Dark</button><a class="btn btn-link waves-effect" href="/buttons">Link</a><button class="btn btn-light waves-effect btn btn-secondary">Light</button><button class="btn btn-purple">purple</button> <button class="btn btn-pink">Pink</button> <button class="btn btn-brown">Brown</button> <button class="btn btn-blue-grey">Blue-grey</button> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Outline buttons</h4>
                                <p class="text-muted m-b-30 font-14">In need of a button, but not the hefty background colors they bring? Replace the default modifier classNamees with the <code class="highlighter-rouge">.btn-outline-*</code> ones to remove all background images and colors on any button.</p>
                                <div class="button-items"><button class="btn btn-primary">primary</button> <button class="btn btn-outline-secondary">secondary</button> <button class="btn btn-outline-success">success</button> <button class="btn btn-outline-info">info</button> <button class="btn btn-outline-warning">warning</button> <button class="btn btn-outline-danger">danger</button> <button class="btn btn-outline-dark">Dark</button><button class="btn btn-outline-light">Light</button><button class="btn btn-outline-purple">purple</button> <button class="btn btn-outline-pink">Pink</button> <button class="btn btn-outline-brown">Brown</button> <button class="btn btn-outline-blue-grey">Blue-grey</button> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Button tags</h4>
                                <p class="text-muted m-b-30 font-14">The <code class="highlighter-rouge">.btn</code>classNamees are designed to be used with the <code class="highlighter-rouge">&lt;button&gt;</code> element. However, you can also use these classNamees on <code class="highlighter-rouge">&lt;a&gt;</code> or <code class="highlighter-rouge">&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>
                                <div class="button-items"><a href="/buttons"><button class="btn btn-primary">Link</button> </a><button class="btn btn-success waves-effect waves-light btn btn-secondary">Button</button> <input class="btn btn-info" type="button" value="Input" /><input class="btn btn-danger" type="submit" value="Submit" /><input class="btn btn-warning" type="reset" value="Reset" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Sizes</h4>
                                <p class="text-muted m-b-30 font-14">Fancy larger or smaller buttons? Add<code class="highlighter-rouge">.btn-lg</code> or <code class="highlighter-rouge">.btn-sm</code> for additional sizes.</p>
                                <div class="button-items"><button class="btn btn-primary btn-lg">Large button</button> <button class="btn btn-secondary btn-lg">Large button</button> <button class="btn btn-primary btn-sm">Small button</button> <button class="btn btn-secondary btn-sm">Small button</button> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Block Buttons</h4>
                                <p class="text-muted m-b-30 font-14">Create block level buttons—those that span the full width of a parent—by adding <code class="highlighter-rouge">.btn-block</code>.</p>
                                <div class="button-items"><button class="btn btn-primary btn-lg btn-block">Block level button</button><button class="btn btn-secondary btn-sm btn-block">Block level button</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Toggle states</h4>
                                <p class="text-muted m-b-30 font-14">Add <code class="highlighter-rouge">data-toggle="button"</code>to toggle a button’s <code class="highlighter-rouge">active</code>state. If you’re pre-toggling a button, you must manually add the <code class="highlighter-rouge">.active</code> className<strong>and</strong> <code class="highlighter-rouge">aria-pressed="true"</code> to the<code class="highlighter-rouge">&lt;button&gt;</code>.</p>
                                <div class="button-items"><button type="button" class="btn btn-success waves-effect waves-light" data-toggle="button" aria-pressed="false" autocomplete="off">Single toggle</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Checkbox buttons</h4>
                                <p class="text-muted m-b-30 font-14">Bootstrap’s <code class="highlighter-rouge">.button</code> styles can be applied to other elements, such as <code class="highlighter-rouge">&lt;label&gt;</code>s, to provide checkbox or radio style button toggling. Add <code class="highlighter-rouge">data-toggle="buttons"</code> to a<code class="highlighter-rouge">.btn-group</code> containing those modified buttons to enable toggling in their respective styles.</p>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-secondary"><input type="checkbox" autocomplete="off" checked="" /> Checked-1</label><label class="btn btn-secondary"><input type="checkbox" autocomplete="off" checked="" /> Checked-2</label><label class="btn btn-secondary"><input type="checkbox" autocomplete="off" checked="" /> Checked-3</label></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Radio buttons</h4>
                                <p class="text-muted m-b-30 font-14">Bootstrap’s <code class="highlighter-rouge">.button</code> styles can be applied to other elements, such as <code class="highlighter-rouge">&lt;label&gt;</code>s, to provide checkbox or radio style button toggling. Add <code class="highlighter-rouge">data-toggle="buttons"</code> to a<code class="highlighter-rouge">.btn-group</code> containing those modified buttons to enable toggling in their respective styles.</p>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-primary active"><input type="radio" name="options" id="option1" /> Active</label><label class="btn btn-primary"><input type="radio" name="options" id="option2" /> Radio</label><label class="btn btn-primary"><input type="radio" name="options" id="option3" /> Radio</label></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Button group</h4>
                                <p class="text-muted m-b-30 font-14">Wrap a series of buttons with <code class="highlighter-rouge">.btn</code> in <code class="highlighter-rouge">.btn-group</code>.</p>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <div role="group" class="btn-group"><button class="btn btn-secondary">Left </button> <button class="btn btn-secondary">Middle </button> <button class="btn btn-secondary">Right </button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Button toolbar</h4>
                                <p class="text-muted m-b-30 font-14">Combine sets of button groups into button toolbars for more complex components. Use utility classNamees as needed to space out groups, buttons, and more.</p>
                                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group mr-2" role="group" aria-label="First group">
                                        <div role="group" class="btn-group"><button class="btn btn-secondary">1 </button> <button class="btn btn-secondary">2 </button> <button class="btn btn-secondary">3 </button> <button class="btn btn-secondary">4 </button> </div>
                                    </div>
                                    <div class="btn-group mr-2" role="group" aria-label="Second group">
                                        <div role="group" class="btn-group"><button class="btn btn-secondary">5 </button> <button class="btn btn-secondary">6 </button> <button class="btn btn-secondary">7 </button> </div>
                                    </div>
                                    <div class="btn-group" role="group" aria-label="Third group">
                                        <div role="group" class="btn-group"><button class="btn btn-secondary">8 </button> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Sizing</h4>
                                <p class="text-muted m-b-30 font-14">Instead of applying button sizing classNamees to every button in a group, just add <code class="highlighter-rouge">.btn-group-*</code> to each <code class="highlighter-rouge">.btn-group</code>, including each one when nesting multiple groups.</p>
                                <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                                    <div role="group" class="btn-group"><button class="btn btn-secondary btn-lg">Left </button> <button class="btn btn-secondary btn-lg">Middle </button> <button class="btn btn-secondary btn-lg">Right </button> </div>
                                </div>
                                <br />
                                <div class="btn-group m-t-10" role="group" aria-label="Basic example"><button type="button" class="btn btn-secondary">Left</button><button type="button" class="btn btn-secondary">Middle</button><button type="button" class="btn btn-secondary">Right</button></div>
                                <br />
                                <div class="btn-group btn-group-sm m-t-10" role="group" aria-label="Basic example"><button type="button" class="btn btn-secondary">Left</button><button type="button" class="btn btn-secondary">Middle</button><button type="button" class="btn btn-secondary">Right</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card m-b-20">
                            <div class="card-body">
                                <h4 class="mt-0 header-title">Vertical variation</h4>
                                <p class="text-muted m-b-30 font-14">Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.</p>
                                <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                                    <button type="button" class="btn btn-secondary">Button</button>
                                    <div class="btn-group" role="group">
                                        <div class="dropdown">
                                            <a aria-haspopup="true" class="btn btn-secondary" aria-expanded="false" style={{ color: 'white' }}> Dropdown</a>
                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu"><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Dropdown Link</button><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Dropdown Link</button></div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-secondary">Button</button><button type="button" class="btn btn-secondary">Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons
