Here are the step-by-step instructions to create a WPA2 Enterprise network using an enterprise AAA server:

1. On the navigation bar, click Wi-Fi > Wi-Fi Networks > Wi-Fi Networks List.
2. The Networks page will be displayed. Click "Add Wi-Fi Network" or select an existing Enterprise AAA (802.1X) network setting to clone.
3. The "Create New Network" page will be displayed.
4. Complete the Network Details settings:
   - Enter a name (up to 32 characters) for the network.
   - Optionally, configure a different SSID from the network name.
   - Enter a description (up to 64 characters) to identify the network.
   - Select "Enterprise AAA (802.1X)" as the Network Type.
   - Click "Next" to proceed.
5. The "Enterprise AAA (802.1X) Settings" page will be displayed.
6. Complete the settings on the Enterprise AAA (802.1X) Settings page:
   - Select the desired Security Protocol (WPA or WPA2 recommended) from the drop-down list.
   - Select an existing RADIUS Server from the drop-down list or add a new RADIUS Server by clicking "Add Server" and configuring it.
   - Toggle the Proxy Service switch to ON to enable the proxy service.
   - Toggle the Accounting Service switch to ON and select an existing RADIUS Server or add a new one.
   - Click "Show more settings" to expand the VLAN settings.
   - Configure the VLAN settings as needed, including VLAN ID, VLAN Pooling, and Proxy ARP.
   - Configure other services settings such as DNS Proxy, Wi-Fi Calling, Client Isolation, Anti-spoofing, etc.
   - Complete the radio settings, including Load Control, Access Control, OFDM only, Data Rate Control, etc.
   - Configure any other desired settings.
7. Click "Next" to proceed to the Venues page.
8. On the Venues page, select the venues where you want to activate this network.
   - To activate the network in all venues, select the check box beside Venue at the top of the table and click "Activate."
   - To activate the network in specific venues, locate the venues in the list and set the switch to ON in the Activated column.
9. By default, the network configuration is applicable to all APs with 2.4 GHz and 5 GHz bands. To customize AP groups and radio band selection:
   - Click "All APs" in the APs column to activate the network on all current and future APs at the venue.
   - Click "Select specific AP groups" to activate the network on specific AP groups, including future APs added to the selected groups.
   - Configure VLAN and Radio Band options for the selected AP groups.
   - Click "Apply" to save the settings.
10. By default, the network configuration is scheduled for 24/7. To customize the scheduling:
    - Click "24/7" in the Scheduling column to use the default schedule.
    - To customize the schedule, click "Custom Schedule" and configure the schedule for each day of the week.
    - Click "Apply" to save the schedule.
11. Review the settings on the Summary page. To view the Shared Secret in plain text, click the eye icon.
12. Click "Finish" to create the network.

Following these steps will guide you through the process of creating a WPA2 Enterprise network using an enterprise AAA server.
