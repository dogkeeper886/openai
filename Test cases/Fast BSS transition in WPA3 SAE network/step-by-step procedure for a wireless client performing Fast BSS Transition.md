Here's a step-by-step procedure for a wireless client performing Fast BSS Transition (FT):

Preconditions:
1. The wireless client supports IEEE 802.11r and is configured to use FT.
2. The client is currently associated with an access point (AP) within the same Extended Service Set (ESS) that supports FT.
3. The target AP to which the client intends to roam also supports FT and belongs to the same ESS.

Procedure:

1. The wireless client detects that the signal strength from the current AP is degrading or below a predefined threshold, indicating the need to perform a handover.

2. The client scans the available APs within range to find a suitable target AP for roaming.

3. The client selects a target AP that supports FT and belongs to the same ESS. This can be based on factors such as signal strength, security configuration, or other defined criteria.

4. The client initiates the FT authentication process:
   a. The client sends an FT Authentication Request frame to the target AP, indicating its intent to perform FT.
   b. The FT Authentication Request frame includes the necessary information such as the client's Pairwise Master Key (PMK), the Mobility Domain (MD) identifier, and the client's MAC address.
   c. The target AP receives the FT Authentication Request frame and verifies the client's credentials, including the PMK and MD.

5. If the FT authentication is successful, the target AP responds with an FT Authentication Response frame, indicating acceptance of the client's request to perform FT.

6. The client receives the FT Authentication Response frame and verifies its validity. If the response is valid, the client proceeds to the next step.

7. The client initiates the FT reassociation process:
   a. The client sends an FT Reassociation Request frame to the target AP, requesting to associate with it using FT.
   b. The FT Reassociation Request frame includes the necessary information such as the client's MAC address, the Target AP's MAC address, and the Key Hierarchy information.
   c. The target AP receives the FT Reassociation Request frame and validates the client's credentials and the provided Key Hierarchy.

8. If the FT reassociation is successful, the target AP responds with an FT Reassociation Response frame, indicating acceptance of the client's request for FT reassociation.

9. The client receives the FT Reassociation Response frame and verifies its validity. If the response is valid, the client completes the FT process.

10. The client establishes a secure connection with the target AP and transfers the necessary encryption keys, including the Pairwise Transient Key (PTK) and Group Transient Key (GTK), to ensure secure communication with the new AP.

11. The client disassociates from the current AP, informing it about the successful FT process.

12. The client associates with the target AP and resumes communication with the network.

By following this procedure, a wireless client can perform a Fast BSS Transition, seamlessly roaming from one AP to another within the same ESS while maintaining the established connection and session continuity. It ensures uninterrupted connectivity, reduced latency, and improved user experience in mobility scenarios.