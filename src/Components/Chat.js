import React from 'react'

function Chat() {
    return (
        <div>
            <div class="main-chat-body ps" id="ChatBody">
    <div class="content-inner">

    <label class="main-chat-time"><span>Today</span></label>
        <div class="media">
            <div class="main-img-user online">C</div>
            <div class="media-body">
                <div class="main-msg-wrapper">Maecenas tempus, tellus eget condimentum rhoncus</div>
                
                <div>
                    <span>10:12 am</span> <a href=""><i class="icon ion-android-more-horizontal"></i></a>
                </div>
            </div>
        </div>
        <div class="media flex-row-reverse">
            <div class="main-img-user online"></div>
            <div class="media-body">
                <div class="main-msg-wrapper">Maecenas tempus, tellus eget condimentum rhoncus</div>
                <div class="main-msg-wrapper">Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</div>
                <div>
                    <span>09:40 am</span> <a href=""><i class="icon ion-android-more-horizontal"></i></a>
                </div>
            </div>
        </div>

        <label class="main-chat-time"><span>Yesterday</span></label>
        <div class="media">
            <div class="main-img-user online">NM</div>
            <div class="media-body">
                <div class="main-msg-wrapper">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                <div>
                    <span>9:32 am</span> <a href=""><i class="icon ion-android-more-horizontal"></i></a>
                </div>
            </div>
        </div>

        <label class="main-chat-time"><span>3 days ago</span></label>
        <div class="media flex-row-reverse">
            <div class="main-img-user online"></div>
            <div class="media-body">
                <div class="main-msg-wrapper">Nullam dictum felis eu pede mollis pretium</div>
                <div>
                    <span>11:22 am</span> <a href=""><i class="icon ion-android-more-horizontal"></i></a>
                </div>
            </div>
        </div>
        <div class="media flex-row-reverse">
            <div class="main-img-user online"></div>
            <div class="media-body">
                <div class="main-msg-wrapper">Nulla consequat massa quis enim. Donec pede justo, fringilla vel...</div>
                <div class="main-msg-wrapper">rhoncus ut, imperdiet a, venenatis vitae, justo...</div>
                <div>
                    <span>9:48 am</span> <a href=""><i class="icon ion-android-more-horizontal"></i></a>
                </div>
            </div>
        </div>
        <div class="media">
            <div class="main-img-user online">AP</div>
            <div class="media-body">
                <div class="main-msg-wrapper">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                <div>
                    <span>9:32 am</span> <a href=""><i class="icon ion-android-more-horizontal"></i></a>
                </div>
            </div>
        </div>
   
    
    
      
    </div>
    <div class="ps__rail-x" style={{left: "0px", top: "0px"}}><div class="ps__thumb-x" tabindex="0" style={{left: "0px", width: "0px"}}></div></div>
    <div class="ps__rail-y" style={{top: "0px", height: "400px", right: "0px"}}><div class="ps__thumb-y" tabindex="0" style={{top: "0px", height: "0px"}}></div></div>
</div>

        </div>
    )
}

export default Chat
