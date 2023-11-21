import { philosopher } from '@/app/philosopher'
import React from 'react'

const Features = () => {
    return (
        <div className='my-4'>
            <h1 className={`text-lg ${philosopher.className}`}>Key Features</h1>

            <ul className='mb-2 pl-2 text-base font-medium'>
                <li>
                    Log in / sign up
                </li>
                <li>
                    <ul className='pl-5'>
                        <li className='list-disc'>JWT token is used for user authentication</li>
                        <li className='list-disc'>Keep track of device logins for each user</li>
                        <li className='list-disc'>Search functionality based on to-do task name</li>
                        <li className='list-disc'>Ability to block a particular logged-in device</li>
                        <li className='list-disc'>Users can sign up manually with their email and password or also by Google account</li>
                        <li className='list-disc'>Authentication is done using a JWT token</li>
                    </ul>
                </li>
            </ul>

            <ul className='mb-2 pl-2 text-base font-medium'>
                <li>
                    Quick Access
                </li>
                <li>
                    <ul className='pl-5'>
                        <li className='list-disc'>Add title and link for quick access</li>
                        <li className='list-disc'>Edit and delete quick access items</li>
                    </ul>
                </li>
            </ul>

            <ul className='mb-2 pl-2 text-base font-medium'>
                <li>
                    BookMark
                </li>
                <li>
                    <ul className='pl-5'>
                        <li className='list-disc'>Bookmark contains Title, Description, Link, Priority (High, Medium, Low), Pinned status, Hash Tags</li>
                        <li className='list-disc'>Users can choose between list view and card view for their bookmark list, providing different visual representations.</li>
                        <li className='list-disc'>Users can filter bookmarks based on the date they were created</li>
                        <li className='list-disc'>Provide sorting options, possibly based on specific fields like title, priority, or creation date ext..</li>
                        <li className='list-disc'>Allow users to navigate through multiple pages of bookmarks</li>
                        <li className='list-disc'>Users can specify how many rows of bookmarks to display on each page</li>
                        <li className='list-disc'>Users can search for bookmarks based on titles, descriptions, or other relevant criteria</li>
                        <li className='list-disc'>Allow users to manually upload an image or fetch it from the provided website link wile creating bookmark</li>
                        <li className='list-disc'>Users can modify bookmark details</li>
                        <li className='list-disc'>Users can remove bookmarks they no longer need</li>
                        <li className='list-disc'>Users can choose to pin or un-pin bookmarks</li>
                    </ul>
                </li>
            </ul>

            <ul className='mb-2 pl-2 text-base font-medium'>
                <li>
                    Chat
                </li>
                <li>
                    <ul className='pl-5'>
                        <li className='list-disc'>Users can have private conversations with each other</li>
                        <li className='list-disc'>Users can search for other users and initiate a chat</li>
                        <li className='list-disc'>Users can create a group and by default he will be the group admin</li>
                        <li className='list-disc'>Users can include emojis in their text messages to express emotions or reactions</li>
                        <li className='list-disc'>Allow users to share various types of files with each other, such as images, documents, etc.</li>
                        <li className='list-disc'>Users have the ability to record videos or screen directly within the chat application and share them with others</li>
                        <li className='list-disc'>Users can record short audio messages and send them as part of their chat conversations</li>
                        <li className='list-disc'>Users can search for specific messages within a chat</li>
                        <li className='list-disc'>Users can search for other users</li>
                        <li className='list-disc'>Schedule meetings within a group or one-on-one meetings with other users</li>
                        <li className='list-disc'>Groups have administrators who can manage group settings</li>
                        <li className='list-disc'>Admins can promote or demote other members to/from admin status</li>
                        <li className='list-disc'>Admins can also remove user from the group</li>
                        <li className='list-disc'>Only admins can edit group title, description, and group picture</li>
                        <li className='list-disc'>Users can choose to leave a group</li>
                    </ul>
                </li>
            </ul>

            <ul className='mb-2 pl-2 text-base font-medium'>
                <li>
                    Meeting
                </li>
                <li>
                    <ul className='pl-5'>
                        <li className='list-disc '>Display a list of scheduled meetings</li>
                        <li className='list-disc '>Users can create and update meeting details</li>
                        <li className='list-disc '>Fields: Title, Description, Length, Date, Participants, Joining Permissions</li>
                        <li className='list-disc '>Specify who can join the meeting (anyone, only contacts, etc.)</li>
                        <li className='list-disc '>Send email notifications to participants about the scheduled meeting when it meeting created</li>
                        <li className='list-disc '>Allow users to add email addresses, and if the user is not registered, send an invitation link while creating meeting</li>
                        <li className='list-disc '>Meeting status based on date and length relative to the current date (Not started, On Going, Completed)</li>
                        <li className='list-disc '>Only allow entry to meetings with "On Going" status</li>
                        <li className='list-disc '>Inside meeting room participants can see list of participants (present and absent)</li>
                        <li className='list-disc '>Participants can engage in real-time text chat during the meeting</li>
                        <li className='list-disc '>Allow participants to react with emojis during the meeting</li>
                        <li className='list-disc '>Participants can digitally raise their hand to indicate a desire to speak</li>
                        <li className='list-disc '>Participants can share their screen with others in the meeting</li>
                        <li className='list-disc '>Allow participants to share video and audio during the meeting</li>
                        <li className='list-disc '>Users can pin a particular participant or their screen share for focused viewing</li>
                        <li className='list-disc '>Participants can leave the meeting at any time</li>
                    </ul>
                </li>
            </ul>

        </div>
    )
}

export default Features
