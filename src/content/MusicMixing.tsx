import React from "react";
import Content, {Columns, Item, ItemTitle} from "../components/Content";
import {SubHeadline} from "../components/ContentMultiView";
import ExternalLink from "../components/ExternalLink";


export default function MusicMixing () {

    return (
        <Content title="Digital Mixing">
            <Columns count={2}>
                <Item>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FRickMachado%2Felectronica-dram%C3%A1tica%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fall-i-got-3-deck-key-mix-fx-no-pre-select-no-order%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Ffree-mix-mixing-my-own-tracks-5-with-some-of-my-favorites%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappys-clubnight-mix-012%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fpearl-dive-2020-9-10-2-most-wanted%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-pearl-dive-0820-mixed-indie-to-house-to-tech-to-techno%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-pearl-dive-720-all-uniques-electronic-tech%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-pearl-dive-620-too-much-to-buy-all-house-tech-techno-and-exotic%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-3-tracks-play-all-the-time-effects-skate-mix-yes%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-cant-find-anything-but-house-in-122-128-skate-mix%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-new-and-old-skate-mix-experimenting-effects-with-s8%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-pearl-dive-204-tone-mix%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-propaganda-skate-urban-forward-house-tech%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-tone-matching-inspiring-tracks-125bpm-30-minutes-prep%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-new-tracks-deep-house-tech-house-bass-house-techno%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fzappy-my-best-schranz-ifitis-2020%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2F60-tracks-mixed-in-70-minutes-techno%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Fdeep-tech-discovery%2F"
                            frameBorder="0"></iframe>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsebastian-teister%2Ftoo-old-already-90s-techno-mixed-at-125-beats%2F"
                            frameBorder="0"></iframe>
                </Item>
                <Item>
                    <ItemTitle>So, What is Mixing?</ItemTitle>
                    <ExternalLink href='https://en.wikipedia.org/wiki/Disc_jockey'>Wikipedia:</ExternalLink>
                    <p>"A disc jockey, more commonly abbreviated as DJ, is a person who plays recorded music for an audience."<br/>
                    "DJs use audio equipment that can play at least two sources of recorded music simultaneously
                        and mix them together to create seamless transitions between recordings and develop unique mixes of songs."</p>
                    <p></p>
                    <ItemTitle>Why CDJs Are Bad</ItemTitle>
                    <p>CDJ devices simulate record players and require techniques like pitch adjustment that developed
                        while there only were record players and no digital equipment.<br/>
                        If you ever worked with a CDJ system you might have noticed that you can adjust the pitch, meaning the tempo at which a record is played,
                        only to 1 decimal. This is an artificially created technical limitation making it neccessary to
                        continuously re-adjust a tracks pitch.
                    </p>
                    <p>Let's say you play one track at 125 BPM and want to mix another track into which has an original tempo
                    of 126 BPM. That means, you have to reduce track #2's tempo by (1-125/126)*100% = 0,79365...%. Every loss in precision means
                    that the 2 tracks diverge leading to an audible gap of the track's sounds, mainly the kick drums.<br/>
                    This makes it neccessary to push or break one track in order to make both run synchronously.</p>
                    <p>Knowing how much and either to push or break a track is being considered as a DJs main skill today and during the age
                    of vinyl and analog record players.<br/>
                    It is not quite easy to match 2 records the analogue way and requires some practice and if you listen to vinyl mixes,
                    you can hear the tap of the DJ's finger pushing one record to match the other as it wasn't technically possible
                    to exactly match pitch of 2 independent record players.</p>
                    <p>Today's computers have a quite deep floating point arithmetic and if you set the exact value of 125 devided by 126
                    to track two's pitch, they wont diverge in years. That means with today's technology the requirement of matching
                    two 'record's' speeds is obsolete as the computer does this for the DJ.</p>
                    <p>But that means that the main skill of a DJ is no longer needed and that is why many of them complain and
                    refuse to modernize. Manufacturers of CDJs know this too and build their systems according to this: they
                    make them to require manually adjustments by limiting the hardware's capabilities.</p>
                    <p>And this is an artificial state and possibly the first denial of technology of our times. While computers
                    could automatically synchronize music playback, most DJs don't want that.</p>
                </Item>
            </Columns>
        </Content>
    )

}