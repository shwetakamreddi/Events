import React from 'react'
import { Image, List } from 'semantic-ui-react'
import user from "../../../Course Assets/assets/user.png"

function EventListAtendee({ attendee }) {
    return (
        <>
            <List.Item>
                {
                    <Image size='mini' circular src={attendee.photoURL} />
                }
            </List.Item>
        </>
    )
}

export default EventListAtendee
