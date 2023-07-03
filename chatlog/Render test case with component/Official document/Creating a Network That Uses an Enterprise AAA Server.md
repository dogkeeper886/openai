Creating a Network That Uses an Enterprise AAA Server
You can create a network that authenticates users against a remote authentication, authorization, and accounting (AAA) server. Before you create a network, write down the IP address, port number, and shared secret of the primary and secondary (if any) RADIUS server that you want to use to authenticate network users.

In non-proxy mode, an AP makes the RADIUS requests directly to the RADIUS server. The outbound connection is from the AP to the IP/FQDN of RADIUS on the RADIUS port in use by the RADIUS service. If this is an internet/external RADIUS system, the APs must be able to reach the server from their locations, presumably via NAT or public routing.

For proxy mode, the controller makes the outbound RADIUS queries on behalf of the AP to the RADIUS system. Therefore, in this instance, the Cloud controller performs the outbound connection on the required port, and there is no firewall requirements for the customer (given that the Cloud is making the request). If you are hosting the RADIUS system, you must allow inbound connectivity to a routable or NATted IP address on the RADIUS port that is configured in the WLAN. In proxy mode, all the RADIUS requests from the AP to the controller passes over the existing control tunnel.

Complete the following steps to create a network that uses a remote AAA server.
On the navigation bar, click Wi-Fi > Wi-Fi Networks > Wi-Fi Networks List.
The Networks page is displayed.
Click Add Wi-Fi Network. Alternatively, select a Enterprise AAA (802.1X) network setting that you want to copy and click Clone at the top of the table.
The Create New Network page is displayed.
Complete the following settings in the Network Details page.
Network Name: Enter a name (up to 32 characters) that you want assign to the network.
Set different SSID: Use this option to configure the SSID different from the network name.
Description: Enter a description (up to 64 characters) to help you identify the network using.
Network Type: Select Enterprise AAA (802.1X).
When the network type is selected, a structure diagram of a Enterprise AAA (802.1X) type of network displays.
Click Next.
The Enterprise AAA (802.1X) Settings page is displayed.
Enterprise AAA (802.1X) Settings Page

Complete the settings on the Enterprise AAA (802.1X) Settings page.
Security Protocol : Select WPA or WPA2(recommened) from the drop down list. By default, WPA2(recommened) is selected.
Note: WPA2 is strong Wi-Fi security that is widely available on all mobile devices manufactured after 2006. WPA2 should be selected unless you have a specific reason to choose otherwise. 6 GHz radios are only supported with WPA3.
Authentication Service: Select the existing RADIUS Server from the drop down list or complete the following steps to add a new RADIUS Server.
Click Add Server and configure a new RADIUS Server. Refer to Creating a Radius Server Profile.
Proxy Service: Toggle switch to ON to enable the proxy service.
Note: Use the controller as proxy in 802.1X networks. A proxy AAA server is used when APs send authentication/accounting messages to the controller and the controller forwards these messages to an external AAA server.
Accounting Service: Toggle the switch to ON to enable this option and select the existing RADIUS Server from the drop down list or complete the following steps to add a new RADIUS Server.
Click Add Server and configure a new RADIUS Server. Refer to Creating a Radius Server Profile.
Proxy Service: Toggle switch to ON to enable the proxy service.
Note: Use the controller as proxy in 802.1X networks. A proxy AAA server is used when APs send authentication/accounting messages to the controller and the controller forwards these messages to an external AAA server.
Click Show more settings.
Complete the following VLAN settings:
VLAN ID: Type the VLAN ID number (default is 1) that you want to assign to this network. The valid range is from 1 to 4094. This option is disabled if VLAN Pooling is enabled. By default, Dynamic VLAN is enabled. Deselect the checkbox to disable the Dynamic VLAN.
VLAN Pooling: Toggle switch to ON to enable the VLAN pooling.
Select VLAN Pooling: Select a VLAN pool from the drop down list or complete the following steps to add a new VLAN pool.
Click Add Pool and configure a new VLAN pool. Refer to Creating a VLAN Pool.
Proxy ARP: Toggle the switch to ON to enable the proxy ARP.
Complete the following services settings:
DNS Proxy: Toggle switch to ON to enable the DNS proxy.
DNS Proxy Dialog Box

Select a DNS Proxy from the table or add a new DNS proxy.
Click Add Rule to add a new DNS proxy. The Add DNS Proxy Rule dialog box is displayed.
Add DNS Proxy Rule Dialog Box

Complete the following fields:
Domain Name: Enter a domain name for the DNS proxy rule.
IP Addresses: Enter an IP address.
Click Add, to add the domain name and IP address to the table.
Click Save.
Click OK.
Wi-Fi Calling: Toggle switch to ON to enable the Wi-Fi Calling.
Wi-Fi Calling Dialog Box

Click Select Profiles. The Select Wi-Fi Calling Profiles dialog box is displayed.
Select Wi-Fi Calling Profiles

Select the profiles in the Available Profiles table and click Add to move the selected profile to the Selected Profiles table. To remove the profiles from the Selected Profiles table, select the profiles in the Selected Profiles table and click Remove.
Click Save.
Client Isolation: Toggle switch to ON to enable the client isolation.
Client Isolation

Complete the following fields:
Isolation Packets: Select Unicast, Multicast/broadcast, or Unicast and Multicast/broadcast.
Automatic support for VRRP/HSRP: Toggle switch to ON to enable the automatic support for VRRP/HSRP.
Client Isolation Allowlist by Venue: Toggle switch to ON to enable the client isolation allowlist by venue.
Anti-spoofing: Toggle switch to ON to enable the anti-spoofing.
Anti-spoofing

Complete the following fields:
ARP request rate limit: Enter the ARP request rate limit.
DHCP request rate limit: Enter the DHCP request rate limit.
Single session ID Accounting: Select the check box to enable this option. This option enables APs to maintain one accounting session for client roaming.
Force DHCP: Select the Force DHCP. This option is disabled if you enable the Anti-spoofing option.
Enable logging client data to external syslog: Select the Enable logging client data to external syslog.
Complete the following radio settings:
Radio

Complete the following fields:
Hide SSID: Select this feature to hide SSID.
Load Control: Complete the following fields:
Max Rate: Choose one of the following options from the drop down list:
Unlimited—no limits on bandwidth allocation.
Per AP—The max bandwidth allocation limit of all connections to that specific network on the AP. If selected, two other options appear, Upload Limit and Download Limit. If either (or both) boxes are checked, a sliding scale appears and you can drag your cursor along the line to choose the Mbps limits.
Max clients per radio: Limit the number of clients that can associate with this network per AP radio (default is 100).
Enable load balancing between all radios: Select this check box to enable load balancing for all radios. Load balancing helps improve network performance by helping to spread the client load between the radios on the AP.
Enable load balancing between APs: Select this check box to spread the client load between nearby access points, so that one AP does not get overloaded while another sits idle.
Access Control: Complete the following fields:
Access Control

Choose from below options:
Complete the following steps to create a new Access Control policy:
Configure Layer 2, Layer 3, Device & OS, Applications, and Client Rate Limit. Refer to Creating an Access Control Policy.
Click Save as AC Profile to create a new Access Control policy.
Complete the following steps to select an existing Access Control policy:
Click Select Access Control Profile.
Select Access Control Profile

Toggle the switch to ON beside the Access Control. The Access Control Policy field is displayed.
Select the Access Control Policy from the drop down list. The Layer 2, Layer 3, Device & OS, Applications, and Client Rate Limit information of the selected Access Control Policy is displayed below the Access Control Policy field.
If you want to cancel the Access Control Policy selection, click Select separate profiles to exit from the Select Access Control Profile.
Enable OFDM only (Disables 802.11b): Select the check box to enable this option. Enabling this option disables CCK rates of 1, 2, 5.5, and 11 Mbps, so no 802.11b-only clients can connect. Beacons and probe responses will be transmitted at 6 Mbps, and data frames at 6, 9, 18, 24, 36, 48, and 54 Mbps. Enforcing higher minimum data rates increases overall network throughput capacity, but reduces the distance at which clients are able to remain connected.
Data Rate Control (2.4 GHz & 5 GHz): Configure the following:
BSS Min Rate: Select None, 12 Mbps, or 24 Mbps from the drop down list. Use this option to configure the minimum transmission rate supported by the network. If OFDM Only is enabled, the only valid options are 12 Mbps and 24 Mbps, with Mgmt Tx frames fixed at 6 Mbps. This option can also be used to prevent 11b clients from connecting, and to allow greater client density with higher data rates.
Mgt Tx Rate: Select 1, 2, 5.5, 6, 9, 11, 12, or 18 Mbps from the drop down list. This option is only available if both Enable OFDM only and BSS Min Rate are disabled. (Otherwise, the Mgmt Tx Rate is defined by those settings.) Use this setting to configure the rate at which management frames are sent. The default is 6 Mbps.
Enable 802.11k neighbor reports: Select the check box to enable this option. Enhances roaming by providing a list of neighbor APs to the client device.
Enable 802.11r Fast BSS Transition: Select the check box to enable this option. 802.11r Fast BSS Transition fast roaming protocol.
Mobility Domain ID: This field is displayed only if the Enable 802.11r Fast BSS Transition is selected. Enter the number of Mobility Domain IDs required for the 802.11r Fast BSS Transition.
Client Inactive Timeout: Enter the duration in seconds. This option disables the client if the client is inactive for the configured duration.
Directed MC/BC Threshold: Enter the number of counts. The point at which an AP stops converting group addressed data traffic to unicast is indicated by the number of radio client counts.
Airtime Decongestion: Toggle the switch to ON to activate the airtme decongestion feature.
Join RSSI Threshold: Toggle the switch to ON and then enter the threshold value. This option is disabled if you enable the Airtime Decongestion option.
Transient Client Management: Toggle the switch to ON and the configure parameters for Join Wait Time, Join Expire Time, and Join Wait Threshold.
Transient Client Management

Optimized Connectivity Experience (OCE): Toggle the switch to ON and then and configure parameters for Broadcast Probe Response Delay and RSSI-Based Association Rejection Threshold.
Optimized Connectivity Experience (OCE)

Click Next.
The Venues page is displayed.
Venues Page

Complete the following steps to configure a venue:
Select the venues in which you want to activate this network:
To activate the network in all of your venues, select the check box beside Venue at the top of the table and click Activate.
To activate the network in a specific venue, locate the venue from the list, and set the switch to ON in the Activated column.
The APs, Radio, and Scheduling of the selected venue is displayed in the table.

Select Venues

By default, this network configuration is applicable for all APs and with Radio Band of 2.4 and 5 GHz. To select specific AP groups and modify Radio Band, complete the following steps:
Click All APs in the APs column. The Select APs dialog box is displayed. To activate this network on all current and future APs at this venue. You can also choose a radio band of 2.4 GHz, 5 GHz, or both.
Select APs Dialog Box

Click Select specific AP groups to activate this network on specific AP groups including any AP that is added to selected AP groups in the future. The APs not assigned to any group option is displayed. After APs not assigned to any group is selected, VLAN and Radio Band options are displayed:
Select specific AP groups

In the VLAN option, by default VLAN-1 is selected. Click Edit (pencil icon) icon and configure the VLAN or VLAN pool for the selected AP group.
In the Radio Band option, select 2.4 GHz, 5 GHz, or both 2.4 and 5 GHz from the drop down list for the selected AP group.
Click Apply.
By default, this network configuration is scheduled for 24/7. To configure the Scheduling, complete the following steps:
Click 24/7 in the Scheduling column. The Schedule for Network <network-name> in Venue <venue-name> dialog box is displayed. You can also choose a schedule of 24/7 or follow below steps to customize the schedule.
Schedule for Network Dialog Box

Click Custom Schedule.
Network schedule is customized as per the your requirement. You can configure the schedule for Monday through Sunday and from midnight to midnight (from 00:00 hours through 23.59 hours). For more information, click See tips. The Network Scheduler Tips dialog box is displayed.
Network Scheduler Tips

Click OK to close the Network Scheduler Tips dialog box.
Click Apply.
Click Next.
The Summary page is displayed.
Review the settings that you configured. To display the Shared Secret in plain text, click the eye icon.
Click Finish.